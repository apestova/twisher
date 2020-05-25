package posts;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.stream.Stream;
import java.text.ParseException;


public class Posts {


    public static List<Post> getPosts() {
        return posts;
    }

    public static void setPosts(List<Post> posts) {
        Posts.posts = posts;
    }

    private static List<Post> posts = new ArrayList<>();


    public Posts(){
        posts = new ArrayList<>();
    }

    public static Posts posts1;
    static {
        try {
            posts1 = Container();
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    public Posts(List<Post> posts){
        this.posts = new ArrayList<>(posts);
    }
    public static Posts Container() throws ParseException {
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
        Post[] arr = new Post[]{
                new Post("1",
                        "Однако используемый технологический процесс позволяет создавать только прямые дорожки, идущие от контакта к краю чипа без изгибов и параллельные сторонам кристалла,",
                        dateFormat.parse("2020-01-19T13:35:00.000-0300"),
                        "Task",
                        "https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg",
                        Collections.emptyList()
                ),
                new Post("2",
                        "Однако используемый технологический процесс позволяет создавать только прямые дорожки, идущие от контакта к краю чипа без изгибов и параллельные сторонам кристалла,",
                        dateFormat.parse("2020-01-19T13:35:00.000-0300"),
                        "Task",
                        "https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg",
                        Collections.emptyList()
                ),
                new Post("3",
                        "Для успешной распайки необходимо от каждого контакта протянуть проводящую дорожку к одной из сторон чипа для последующего закрепления на ноге интегральной схемы.",
                        dateFormat.parse("2020-01-19T13:30:00.000-0300"),
                        "User_1",
                        "",
                        Arrays.asList("User_1", "User_3")
                ),
                new Post("4",
                        "Однако используемый технологический процесс позволяет создавать только прямые дорожки, идущие от контакта к краю чипа без изгибов и параллельные сторонам кристалла,",
                        dateFormat.parse("2020-01-19T13:35:00.000-0300"),
                        "Task",
                        "https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg",
                        Collections.emptyList()
                )

        };
        return new Posts(Arrays.asList(arr));
    }

    public Post getPostByID(String id) {
        for (Post post : posts) {
            if (post.id.equals(id)) {
                return post;
            }
        }
        return null;
    }
    public int getID(String id) {
        int i=0;
        for (Post post : posts) {
            if (post.id.equals(id)) {
                return i;
            }
            i = i + 1;
        }
        return -1;
    }
    public boolean add(Post post) {
        if (getPostByID(post.getId()) == null && post.validatePost()) {
            posts.add(post);
            return true;
        }
        return false;
    }
    /*public static class ForEdit {
        String description;
        String photoLink;
    }*/
    public boolean editPost(String id, ForEdit edit) {
        if (getPostByID(id) == null) {
            return false;
        }
        if (!edit.description.equals("")) {
            getPostByID(id).setDescription(edit.description);
        }
        if (!edit.photoLink.equals("")) {
            getPostByID(id).setPhotoLink(edit.photoLink);
        }
        if (!getPostByID(id).validatePost()) {
            return false;
        }
        return true;
    }
  /*  static class Filter {
        String author;
        Date date;
    }*/
    public void sortDate(List<Post> posts1) {
        Collections.sort(posts1, new ComparatorForPosts());
    }
    public List<Post> getPostsByFilter(Filter filter) {
        if (filter == null) {
            return posts;
        }
        else {
            List<Post> filteredPosts = new ArrayList<>();
            for (Post post : posts)
            {
                if ((filter.author.equals("") || post.getAuthor().equals(filter.author)) &&
                        (filter.date.equals("") || post.getCreatedAt().equals(filter.date))) {
                    filteredPosts.add(post);
                }
            };
            return filteredPosts;
        }

    }
    public List<Post> getPosts( Integer skip, Integer top, Filter filter) {
        if (skip == null) {
            skip = 0;
        }
        if (top == null) {
            top = 10;
        }
        List<Post> filteredPosts = new ArrayList<>();
        if (skip < 0 || top <= 0) {
            return filteredPosts;
        }
        filteredPosts = getPostsByFilter(filter);
        sortDate(filteredPosts);
        return filteredPosts.subList(skip, skip + top);
    }
    public String GetNext()
    {
        int i = posts.size() + 1;
        return Integer.toString(i);
    }

    public boolean removePost(String id) {
        int i = getID(id);
        if (i == -1) {
            return false;
        }
        posts.remove(i);
        return true;
    }
    public void addAll(List<Post> postsCont) {
        for (int i=0; i< postsCont.size(); i++) {
            add(postsCont.get(i));
        }
    }
    public boolean takeLike(String id, String author) {
        Post post = getPostByID(id);
        if (post == null) {
            return false;
        }
        post.takeLike(author);
        return true;
    }
}
