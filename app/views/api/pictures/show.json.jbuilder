json.extract! @picture, :id, :author_id, :title, :description
json.pictureUrl url_for(@picture.picture)
json.author @picture.author.username
json.authorProfilePicture url_for(@picture.author.profile_picture) 
json.numLikes @likers
json.extract! @picture.likers, :ids


# json.likerIds @picture.likers.ids
 
