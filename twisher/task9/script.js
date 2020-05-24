window.onload = function () {
    let posts = [
        {
            id: '1',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2020-03-17T23:00:00'),
            author: 'Иван Иванов',
            likes: ['Бегун Юлий', 'Иван Иванов'],
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },
        {
            id: '2',
            description: 'lol',
            createdAt: new Date('2020-03-17T23:01:00'),
            author: 'Петров Александр',
            likes: ['Бегун Юлий', 'Иван Иванов'],
            photoLink: ''
        },
        {
            id: '3',
            description: 'Может быть однажды я приду на пары вовремя...',
            createdAt: new Date('2020-03-17T11:01:00'),
            author: 'Витилович Вихаил',
            likes: ['Бегун Юлий', 'Иван Иванов'],
            photoLink: ''
        },
        {
            id: '4',
            description: 'Посмотрите на эту красоту!',
            createdAt: new Date('2020-03-17T13:01:00'),
            author: 'Радужная Долина',
            likes: ['Бегун Юлий', 'Иван Иванов'],
            photoLink: 'https://cs8.pikabu.ru/post_img/big/2018/04/20/10/1524246614168232071.jpg'
        },
        {
            id: '5',
            description: 'видели ли вы вчера, какая красивая луна была?',
            createdAt: new Date('2020-03-17T15:01:00'),
            author: 'Александров Петя',
            likes: ['Бегун Юлий', 'Иван Иванов'],
            photoLink: ''
        },
        {
            id: '6',
            description: 'доброе утро, я тока проснувся',
            createdAt: new Date('2020-03-17T12:01:00'),
            author: 'Бегун Юлий',
            likes: ['Бегун Юлий', 'Иван Иванов'],
            photoLink: ''
        },
        {
            id: '7',
            description: 'это только седьмой пост, а у меня уже закончилась фантазия, что писать',
            createdAt: new Date('2020-04-14T14:15:00'),
            author: 'Пестова Анна',
            likes: ['Бегун Юлий', 'Иван Иванов'],
            photoLink: ''
        },
        {
            id: '8',
            description: 'Только фанатичной толпой легко управлять!',
            createdAt: new Date('2020-04-14T14:15:00'),
            author: 'Апольф Ритлер',
            likes: ['Бегун Юлий', 'Иван Иванов'],
            photoLink: ''
        },
        {
            id: '9',
            description: 'а впринципе это не так важно, так что поехали однотипные!!!!',
            createdAt: new Date('2020-04-14T14:10:00'),
            author: 'Пестова Анна',
            likes: ['Бегун Юлий', 'Иван Иванов'],
            photoLink: ''
        },
        {
            id: '10',
            description: 'устала',
            createdAt: new Date('2020-04-14T14:21:00'),
            author: 'Пестова Анна',
            likes: ['Бегун Юлий', 'Иван Иванов'],
            photoLink: ''
        },
        {
            id: '11',
            description: 'пара через 5 часов',
            createdAt: new Date('2020-04-14T14:21:30'),
            author: 'Пестова Анна',
            likes: ['Бегун Юлий', 'Иван Иванов'],
            photoLink: ''
        },
        {
            id: '12',
            description: 'на дистанционном обучении заданий задают больше, чем раньше',
            createdAt: new Date('2020-04-14T14:22:00'),
            author: 'Пестова Анна',
            likes: ['Бегун Юлий', 'Иван Иванов'],
            photoLink: ''
        },
        {
            id: '13',
            description: 'я даже не успеваю делать все вовремя',
            createdAt: new Date('2020-04-14T14:22:30'),
            author: 'Пестова Анна',
            likes: ['Бегун Юлий', 'Иван Иванов'],
            photoLink: ''
        },
        {
            id: '14',
            description: 'и при этом некоторые преподаватели любят использовать фразы *ну вы дома ичего не делаете, так что вот вам еще задание*',
            createdAt: new Date('2020-04-14T14:23:00'),
            author: 'Пестова Анна',
            likes: ['Бегун Юлий', 'Иван Иванов'],
            photoLink: ''
        },
        {
            id: '15',
            description: 'я просто снова хочу ходить в универ и все успевать(',
            createdAt: new Date('2020-04-14T14:24:00'),
            author: 'Пестова Анна',
            likes: ['Бегун Юлий', 'Иван Иванов'],
            photoLink: ''
        },
        {
            id: '16',
            description: 'ладно, извините, меня стало слишком много в вашей ленте',
            createdAt: new Date('2020-04-14T14:25:00'),
            author: 'Пётр',
            likes: ['Бегун Юлий', 'Иван Иванов'],
            photoLink: ''
        },
        {
            id: '17',
            description: 'я ботан',
            createdAt: new Date('2020-04-14T14:26:00'),
            author: 'Бегун Юлий',
            likes: ['Бегун Юлий', 'Иван Иванов'],
            photoLink: ''
        },
        {
            id: '18',
            description: 'юлий ботан',
            createdAt: new Date('2020-04-14T14:27:00'),
            author: 'Шикарный Макс',
            likes: ['Бегун Юлий', 'Иван Иванов'],
            photoLink: ''
        },
        {
            id: '19',
            description: 'университетские чебуреки лучшие!!!',
            createdAt: new Date('2020-04-14T14:28:00'),
            author: 'Гном Ник',
            likes: ['Бегун Юлий', 'Иван Иванов'],
            photoLink: ''
        },
        {
            id: '20',
            description: 'miss you :c',
            createdAt: new Date('2020-04-14T14:28:30'),
            author: 'Гном Ник',
            likes: ['Бегун Юлий', 'Иван Иванов'],
            photoLink: ''
        },

    ];





    let empty={
        id: '',
        description: '',
        createdAt: new Date(),
        author: '',
        likes: [],
    };

    class PostCollection {

        constructor(_posts) {
            this._posts = _posts;
        }

        clear() {
            this._posts.splice(0);
        }

        getAll() {
            this.sortDate();
            return this._posts;
        }

        getInd(id) {
            for (let i = 0; i < this._posts.length; i++) {
                if (this._posts[i].id === id) {
                    return i;
                }
            }
        }

        get(id) {
            for (let i = 0; i < this._posts.length; i++) {
                if (this._posts[i].id === id) {
                    return this._posts[i];
                }
            }
        }

        validatePost(post) {
            for (let key in post) if (!(key in empty) && (key !== 'photoLink'))
                return false;
            if (post.description.length >= 200)
                return false;
            if (post.author.length === 0)
                return false;
            for (let key in empty) if (!(key in post))
                return false;
            return true;
        }

        add(post) {
            if (!this.validatePost(post))
                return false;
            if (this.get(post.id))
                return false;
            if (post.likes.length!==0)
                return false;
            this._posts[this._posts.length] = post;
            this.sortDate();
            return true;
        }

        edit(id, post) {
            if (!this.get(id))
                return false;
            if (!this.validatePost(this.get(id)))
                return false;

            for (let key in this.get(id)) if ((key in post) && (key !== 'id') && (key !== 'author') && (key !== 'createdAt') && (key !== 'likes'))
                this.get(id)[key] = post[key];
            return true;

        }
        remove(id) {
            if (!this.get(id))
                return false;
            this._posts.splice(this.getInd(id), 1);
        }


        sortDate() {
            return this._posts.sort((a, b) => a.createdAt.getTime() > b.createdAt.getTime() ? -1 : 1)
        }

        getPage(skip=0, top=10, filterConfig) {
            this.sortDate();
            let posts1 = this._posts.slice();
            if (typeof filterConfig != "undefined") {
                posts1 = posts1.filter(item => {
                    for (let key in filterConfig) if (key !== 'createdAt' && filterConfig[key] !== item[key])
                        return false;
                    return true;
                });
            }
            return posts1.slice(skip, skip + top);
        }

        addAll(posts) {
            let arr = [];
            for (let i = 0; i < posts.length; i++) {
                if (this.validatePost(posts[i])) {
                    if (!this.add(posts[i]))
                        arr.push(posts[i]);
                } else {
                    arr.push(posts[i]);
                }
            }
            return arr;
        }

        takeLike(id, authorOfLike) {
            let index = this.get(id).likes.indexOf(authorOfLike);

            if (index === -1) {
                this.get(id).likes.push(authorOfLike);
                return this.get(id).likes.length;
            }
            else {
                this.get.likes.splice(index, 1);
                return this.get(id).likes.length;
            }
        }
        countOfLikes(id) {
            return this.get(id).likes.length;
        }
    }
    let user={name: "Бегун Юлий"};

    document.getElementById("userInfoName").textContent = user.name;

    class View {

        static build(post) {
            let postDiv = document.createElement("div");
            postDiv.className = "postDiv";
            postDiv.id = post.id;

            let infoDiv = document.createElement("div");

            if (user.name === post.author) {
                let deleteA = document.createElement("a");
                deleteA.className = "editDelete";
                deleteA.setAttribute("href", "index.html");
                deleteA.textContent = "Delete";
                infoDiv.appendChild(deleteA);
                let editA = document.createElement("a");
                editA.className = "editDelete";
                editA.setAttribute("href", "index.html");
                editA.textContent = "Edit";
                infoDiv.appendChild(editA);
            }

            let par = document.createElement("p");
            let name = document.createElement("h2");
            name.className = "postName";
            name.textContent = post.author;
            par.appendChild(name);

            let time = document.createElement("span");
            time.className = "postTime";
            time.textContent = post.createdAt.toLocaleString();
            par.appendChild(time);
            infoDiv.appendChild(par);
            postDiv.appendChild(infoDiv);

            let text = document.createElement("div");
            text.className = "postText";

            let parText = document.createElement("p");
            parText.textContent = post.description;
            text.appendChild(parText);

            postDiv.appendChild(text);

            if (post.photoLink !== '') {
                let postImgDiv = document.createElement("div");
                postImgDiv.className = "postImgDiv";
                let postImg = document.createElement("img");
                postImg.className = "postImg";
                postImg.setAttribute("src", post.photoLink);
                postImgDiv.appendChild(postImg);
                postDiv.appendChild(postImgDiv);
            }
            let likeB = document.createElement("a");
            likeB.className = "likeButton";
            likeB.setAttribute("href", "index.html");
            likeB.textContent = "Like";
            postDiv.appendChild(likeB);
            let countLikes = document.createElement("p");
            countLikes.className = "likesCount";
            countLikes.textContent = post.likes.length;
            postDiv.appendChild(countLikes);

            return postDiv;
        }

        static displayPost(post) {
            document.getElementById("posts").insertBefore(this.build(post), document.getElementById("addTenDiv"));
        }

        static displayAllPosts(posts) {
            posts.forEach(post => this.displayPost(post));
        }

        static delete(post) {
            postCollection.remove(post.id);
            document.getElementById(post.id).remove();
        }

        static add(post) {
            if (postCollection.add(post)) {
                this.displayPost(post);
            }
        }

        static edit(post, newPost) {
            if (postCollection.edit(post.id, newPost)) {
                document.getElementById("posts").replaceChild(this.build(postCollection.get(post.id)), document.getElementById(post.id));
            }
        }

    }




    let postCollection = new PostCollection(posts);




   // View.delete(postCollection.get("20"));
    //View.displayAllPosts(postCollection.getAll());
   // View.displayAllPosts(postCollection.getAll());
   /* View.add({
        id: '21',
        description: 'уже не скучаю',
        createdAt: new Date('2020-04-14T14:30:30'),
        author: 'Гном Ник',
        photoLink: '',
        likes:[]
    });*/
   // View.displayAllPosts(postCollection.getAll());
    View.displayAllPosts(postCollection.getAll());
    View.edit(postCollection.get('10'), {
        description: 'ладно скучаю',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
    });
   // View.displayAllPosts(postCollection.getAll());

};