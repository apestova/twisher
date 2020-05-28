package posts;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.stream.Stream;
public class ServletForPosts extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String id = req.getParameter("id");
        Post post = Posts.posts1.getPostByID(id);
        String str;
        if(post == null)
            str = "Error";
        else
            str = post.toString();
        resp.getOutputStream().write(str.getBytes(StandardCharsets.UTF_8));

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        if(req.getRequestURL().indexOf("/add") != -1) {
            if(addPost(req, resp))
                resp.getOutputStream().println("Success");
            else
                resp.getOutputStream().println("Error");
        }
        else
            postPage(req, resp);
    }

    private boolean addPost(HttpServletRequest req, HttpServletResponse resp) {
        Post post = parsePost(req, resp);
        if(post.getAuthor().equals(""))
            return false;

        post.setId(Posts.posts1.GetNext());
        post.setCreatedAt(new Date());
        return Posts.posts1.add(post);
    }

    private Post parsePost(HttpServletRequest req, HttpServletResponse resp) {
        Post post = new Post();

        String str = req.getParameter("au");
        if(str != null)
            post.setAuthor(str);
        str = req.getParameter("d");
        if(str != null)
            post.setDescription(str);
        str = req.getParameter("pl");
        if(str != null)
            post.setPhotoLink(str);
        return post;
    }

    private void postPage(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        Integer skip, top;

        String skipStr = req.getParameter("skip");
        skip = parseInt(skipStr);
        String topStr = req.getParameter("top");
        top = parseInt(topStr);

        Filter filter = new Filter();

        String dateStr = req.getParameter("date");
        if(dateStr != null) {
            try {
                filter.setCreatedAt(parseDate(dateStr));
            } catch (ParseException e) {
                e.printStackTrace();
            }
        }
        String author = req.getParameter("author");
        if(author != null)
            filter.setAuthor(author);



        List<Post> posts = new ArrayList<Post>(Posts.posts1.getPosts(skip, top, filter));
        ServletOutputStream out = resp.getOutputStream();
        printTweets(out, posts);
    }

    private Integer parseInt(String str) {
        if(str == null)
            return null;
        else
            return Integer.parseInt(str);
    }

    private Date parseDate(String str) throws ParseException {
        return new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ").parse(str);
    }

    private String[] parseArray(String str) {
        if(str == null)
            str = "";

        Stream<String> stream = Arrays.stream(str.split(","));
        stream = stream.filter((string) -> !string.equals(""));

        return stream.toArray(String[]::new);
    }

    private void printTweets(ServletOutputStream out, List<Post> posts) throws IOException {
        for(Post post : posts) {
            out.write((post.toString() + "\n").getBytes(StandardCharsets.UTF_8));
        }

        if(posts.size() == 0)
            out.write("Empty page".getBytes(StandardCharsets.UTF_8));
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String id = req.getParameter("id");

        resp.getOutputStream().println(Posts.posts1.removePost(id));
    }

    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println(req.getRequestURL());
        if(req.getRequestURL().indexOf("/like") != -1) {
            if(TakeLike(req, resp))
                resp.getOutputStream().println("Success");
            else
                resp.getOutputStream().println("Error");
        }
        else if(editPost(req, resp))
            resp.getOutputStream().println("Success");
        else
            resp.getOutputStream().println("Error");

    }

    private boolean TakeLike(HttpServletRequest req, HttpServletResponse resp) {
        String id = req.getParameter("id");
        String user = req.getParameter("user");
        if(id == null || user == null)
            return false;
        return Posts.posts1.takeLike(id, user);
    }
    private ForEdit parseEditPost(HttpServletRequest req, HttpServletResponse resp) {
        ForEdit forEdit = new ForEdit();
        String str = req.getParameter("d");
        if(str != null)
            forEdit.setDescription(str);
        str = req.getParameter("pl");
        if(str != null)
            forEdit.setPhotoLink(str);
        return forEdit;
    }
    private boolean editPost(HttpServletRequest req, HttpServletResponse resp) {
        String id = req.getParameter("id");
        if(id == null)
            return false;
        ForEdit post = parseEditPost(req, resp);
        return Posts.posts1.editPost(id, post);
    }
}

