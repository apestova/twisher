package posts;

import java.util.Date;

public class Filter {

        public String author;
        public Date date;
    Filter() {
    }
    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
    public Date getCreatedAt() {
        return date;
    }
    public void setCreatedAt(Date createdAt) {
        this.date = createdAt;
    }
}
