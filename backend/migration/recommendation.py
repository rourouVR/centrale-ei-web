from pymongo import MongoClient
import csv
import numpy as np
import pandas as pd
import operator
from sklearn import model_selection
from sklearn.metrics.pairwise import pairwise_distances
client = MongoClient(
    "mongodb://group7:rvBHVpAF7cAwzM5A@cs2021.lmichelin.fr:27017/group7?ssl=true")


# Create CSV file from database
db = client.group7
ratings = db.ratings
recommendation = db.recommendation
users = db.users
movies = db.movies
recommend = db.recommendation

t = []


def filloutuserscsv():
    ##header = ["userid", "mail", "firstName", "lastName"]
    with open('users.csv', 'w') as f:
        writer = csv.writer(f)
        # writer.writerow(header)
        i = 0
        for user in users.find():
            data = [i, user["email"], user["firstName"], user["lastName"]]
            i += 1
            t.append(user["email"])
            writer.writerow(data)


filloutuserscsv()

l = []


def filloutmoviescsv():
    # header = ["itemid","imdbid", "title", "release_date", "note", "language"]
    with open('movies.csv', 'w') as f:
        writer = csv.writer(f)
        # writer.writerow(header)
        i = 0
        for movie in movies.find():
            data = [i, movie["imdbid"], movie["title"],
                    movie["release_date"], movie["note"], movie["language"]]
            i += 1
            l.append(movie["imdbid"])
            writer.writerow(data)


filloutmoviescsv()


def filloutratingcsv():
    ##header = ["userid", "imdbid", "rating"]
    with open('ratings.csv', 'w') as f:
        writer = csv.writer(f)
        # writer.writerow(header)
        for rating in ratings.find():
            data = [t.index(rating["mail"])+1,
                    l.index(rating["imdbid"])+1, rating["rating"]]
            writer.writerow(data)


filloutratingcsv()


data_cols = ['userid', 'itemid', 'rating']
user_cols = ['userid', 'mail', 'firstName', 'lastName']
item_cols = ['itemid', 'imdbid', 'title', 'release_date', 'note', 'language']
users = pd.read_csv('users.csv', sep=',', names=user_cols, encoding='latin-1')
item = pd.read_csv('movies.csv', sep=',', names=item_cols, encoding='latin-1')
data = pd.read_csv('ratings.csv', sep=',',
                   names=data_cols, encoding='latin-1')
print(data)
nb_users = users.userid.unique().shape[0]
nb_items = item.itemid.unique().shape[0]
movie_matrix = data.pivot_table(
    index='userid', columns='itemid', values='rating')

ratings = pd.DataFrame(data.groupby('itemid')['rating'].mean())
ratings['number_of_ratings'] = data.groupby('itemid')['rating'].count()
train_data, test_data = model_selection.train_test_split(data, test_size=0.25)
movie_matrix = train_data.pivot_table(
    index='userid', columns='itemid', values='rating')
print(train_data.itertuples())
train_data_matrix = np.zeros((nb_users, nb_items))
print(train_data.itertuples)
for line in train_data.itertuples():
    print(line)
    train_data_matrix[line[1]-1, line[2]-1] = line[3]


user_similarity = pairwise_distances(train_data_matrix, metric='cosine')


def predict(ratings, similarity, type='user'):

    if type == 'user':
        print(len(ratings[1]))
        mean_user_rating = ratings.mean(axis=1)
        # You use np.newaxis so that mean_user_rating has same format as ratings
        ratings_diff = (ratings - mean_user_rating[:, np.newaxis])
        pred = mean_user_rating[:, np.newaxis] + similarity.dot(
            ratings_diff) / np.array([np.abs(similarity).sum(axis=1)]).T
    elif type == 'item':
        pred = ratings.dot(similarity) / \
            np.array([np.abs(similarity).sum(axis=1)])
    return pred


user_prediction = predict(train_data_matrix, user_similarity, type='user')

print(user_prediction)
print(len(user_prediction))
print(len(user_prediction[:][0]))
print(len(user_prediction[0][:]))


def getmoviesuser(user, user_prediction):
    s = user_prediction[user]
    s1 = s.tolist()
    p = {}
    for i in range(len(s1)):

        p[l[i]] = s1[i]
    p1 = sorted(p.items(), key=lambda x: x[1], reverse=True)
    return(p1)


#print(getmoviesuser(1, user_prediction))

def filloutdatabase():
    recommend.drop()
    for i in range(len(t)):
        p = getmoviesuser(i, user_prediction)
        q = []
        for j in p:
            q.append(j[0])
        z = {
            "email": t[i],
            "movieList": q
        }

        recommend.insert_one(z)


filloutdatabase()
