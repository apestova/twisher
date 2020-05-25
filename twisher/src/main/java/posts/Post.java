package posts;

import java.util.Date;
import java.util.List;

public class Post {
    public String id;
    public String description;
    public Date createdAt;
    public String author;
    public String photoLink;
    private List<String> likes;

    Post() {
    }

    public Post(String id, String description, Date createdAt, String author, String photoLink, List<String>likes) {
        this.id = id;
        this.description = description;
        this.createdAt = createdAt;
        this.author = author;
        this.photoLink = photoLink;
        this.likes = likes;
    }

    public Post(Post post) {
        this.id = post.id;
        this.description = post.description;
        this.createdAt = post.createdAt;
        this.author = post.author;
        this.photoLink = post.photoLink;
        this.likes = post.likes;
    }
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getCreatedAt() {
        return createdAt;
    }
    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getPhotoLink() {
        return photoLink;
    }

    public void setPhotoLink(String photoLink) {
        this.photoLink = photoLink;
    }

    public List<String> getLikes() {
        return likes;
    }

    public void setLikes(List<String> likes) {
        this.likes = likes;
    }
    @Override
    public String toString() {
        return new String("id: " + this.getId() + '\n' + "author: " + this.getAuthor() + '\n'
                + "createdAt: " + this.getCreatedAt() + '\n' + "description: " + this.getDescription() + '\n'
                  + "likes: " + this.getLikes() + "\n\n");
    }
    public boolean validatePost() {
        return id != null && author != null && createdAt != null && description != null
                && description.length() > 0 && description.length() < 200 && author.length() > 0;
    }
    public void takeLike(String author) {
        if (getLikes().contains(author)) {
            getLikes().remove(author);
        }
        else {
            getLikes().add(author);
        }
    }

}