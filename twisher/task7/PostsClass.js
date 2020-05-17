(function() {
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
        },
        {
            id: '3',
            description: 'Может быть однажды я приду на пары вовремя...',
            createdAt: new Date('2020-03-17T11:01:00'),
            author: 'Витилович Вихаил',
            likes: ['Бегун Юлий', 'Иван Иванов'],
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
        },
        {
            id: '6',
            description: 'доброе утро, я тока проснувся',
            createdAt: new Date('2020-03-17T12:01:00'),
            author: 'Бегун Юлий',
            likes: ['Бегун Юлий', 'Иван Иванов'],
        },
        {
            id: '7',
            description: 'это только седьмой пост, а у меня уже закончилась фантазия, что писать',
            createdAt: new Date('2020-04-14T14:15:00'),
            author: 'Пестова Анна',
            likes: ['Бегун Юлий', 'Иван Иванов'],
        },
        {
            id: '8',
            description: 'Только фанатичной толпой легко управлять!',
            createdAt: new Date('2020-04-14T14:15:00'),
            author: 'Апольф Ритлер',
            likes: ['Бегун Юлий', 'Иван Иванов'],
        },
        {
            id: '9',
            description: 'а впринципе это не так важно, так что поехали однотипные!!!!',
            createdAt: new Date('2020-04-14T14:10:00'),
            author: 'Пестова Анна',
            likes: ['Бегун Юлий', 'Иван Иванов'],
        },
        {
            id: '10',
            description: 'устала',
            createdAt: new Date('2020-04-14T14:21:00'),
            author: 'Пестова Анна',
            likes: ['Бегун Юлий', 'Иван Иванов'],
        },
        {
            id: '11',
            description: 'пара через 5 часов',
            createdAt: new Date('2020-04-14T14:21:30'),
            author: 'Пестова Анна',
            likes: ['Бегун Юлий', 'Иван Иванов'],
        },
        {
            id: '12',
            description: 'на дистанционном обучении заданий задают больше, чем раньше',
            createdAt: new Date('2020-04-14T14:22:00'),
            author: 'Пестова Анна',
            likes: ['Бегун Юлий', 'Иван Иванов'],
        },
        {
            id: '13',
            description: 'я даже не успеваю делать все вовремя',
            createdAt: new Date('2020-04-14T14:22:30'),
            author: 'Пестова Анна',
            likes: ['Бегун Юлий', 'Иван Иванов'],
        },
        {
            id: '14',
            description: 'и при этом некоторые преподаватели любят использовать фразы *ну вы дома ичего не делаете, так что вот вам еще задание*',
            createdAt: new Date('2020-04-14T14:23:00'),
            author: 'Пестова Анна',
            likes: ['Бегун Юлий', 'Иван Иванов'],
        },
        {
            id: '15',
            description: 'я просто снова хочу ходить в универ и все успевать(',
            createdAt: new Date('2020-04-14T14:24:00'),
            author: 'Пестова Анна',
            likes: ['Бегун Юлий', 'Иван Иванов'],
        },
        {
            id: '16',
            description: 'ладно, извините, меня стало слишком много в вашей ленте',
            createdAt: new Date('2020-04-14T14:25:00'),
            author: 'Пестова Анна',
            likes: ['Бегун Юлий', 'Иван Иванов'],
        },
        {
            id: '17',
            description: 'я ботан',
            createdAt: new Date('2020-04-14T14:26:00'),
            author: 'Бегун Юлий',
            likes: ['Бегун Юлий', 'Иван Иванов'],
        },
        {
            id: '18',
            description: 'юлий ботан',
            createdAt: new Date('2020-04-14T14:27:00'),
            author: 'Шикарный Макс',
            likes: ['Бегун Юлий', 'Иван Иванов'],
        },
        {
            id: '19',
            description: 'университетские чебуреки лучшие!!!',
            createdAt: new Date('2020-04-14T14:28:00'),
            author: 'Гном Ник',
            likes: ['Бегун Юлий', 'Иван Иванов'],
        },
        {
            id: '20',
            description: 'miss you :c',
            createdAt: new Date('2020-04-14T14:28:30'),
            author: 'Гном Ник',
            likes: ['Бегун Юлий', 'Иван Иванов'],
        },

    ];
    let empty={
        id: '',
        description: '',
        createdAt: new Date(),
        author: '',
        likes: [],
    };
    let newPost={
        id: '21',
        description: 'ff',
        createdAt: new Date('2020-03-14T14:28:30'),
        author: 'l k',
        likes: [],
    };
    let newPost1 = {
        id: '22',
        description: '1',
        createdAt: new Date('2020-03-14T14:28:30'),
        author: 'l k',
        likes: [],
    };
    let newPost2 = {

        id: '23',
        description: '2',
        createdAt: new Date('2020-03-14T14:28:30'),
        author: 'l k',
        likes: [],
    };
    let edPost = {
        description: 'aha',
    };

    class PostCollection {
        constructor(_posts) {
            this._posts = _posts;
        }

        clear() {
            this._posts.splice(0);
        }

        sortDate() {
            return this._posts.sort((a, b) => a.createdAt.getTime() > b.createdAt.getTime() ? -1 : 1)
        }

        getPage(skip, top, filterConfig) {
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

        get(id) {
            for (let i = 0; i < this._posts.length; i++) {
                if (this._posts[i].id === id) {
                    return this._posts[i];
                }
            }
            return false;
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
            this._posts.splice(posts.findIndex(function callback(element, index, array) {
                return element.id === id;
            }), 1);
            return true;
        }

        addALL(posts) {
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
    }


    let postsClass = new PostCollection(posts);
    console.log(postsClass.get('2'));
    console.log(postsClass.add(newPost));
    console.log(postsClass.get('21'));

    console.log(postsClass.edit('21', edPost))
    console.log(postsClass.get('21'));

    console.log(postsClass.getPage(0, 10));


    console.log(postsClass.getPage(10, 10));


    console.log(postsClass.getPage(0, 10, {author: 'Иван Иванов'}));
    console.log(postsClass.addALL([ newPost1, newPost2]));
    console.log(postsClass.remove('21'));
    console.log(postsClass);
} ());