(function() {
    let posts = [
        {
            id: '1',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2020-03-17T23:00:00'),
            author: 'Иван Иванов',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
        },
        {
            id: '2',
            description: 'lol',
            createdAt: new Date('2020-03-17T23:01:00'),
            author: 'Петров Александр',
        },
        {
            id: '3',
            description: 'Может быть однажды я приду на пары вовремя...',
            createdAt: new Date('2020-03-17T11:01:00'),
            author: 'Витилович Вихаил',
        },
        {
            id: '4',
            description: 'Посмотрите на эту красоту!',
            createdAt: new Date('2020-03-17T13:01:00'),
            author: 'Радужная Долина',
            photoLink: 'https://cs8.pikabu.ru/post_img/big/2018/04/20/10/1524246614168232071.jpg'
        },
        {
            id: '5',
            description: 'видели ли вы вчера, какая красивая луна была?',
            createdAt: new Date('2020-03-17T15:01:00'),
            author: 'Александров Петя',
        },
        {
            id: '6',
            description: 'доброе утро, я тока проснувся',
            createdAt: new Date('2020-03-17T12:01:00'),
            author: 'Бегун Юлий',
        },
        {
            id: '7',
            description: 'это только седьмой пост, а у меня уже закончилась фантазия, что писать',
            createdAt: new Date('2020-04-14T14:15:00'),
            author: 'Пестова Анна',
        },
        {
            id: '8',
            description: 'Только фанатичной толпой легко управлять!',
            createdAt: new Date('2020-04-14T14:15:00'),
            author: 'Апольф Ритлер',
        },
        {
            id: '9',
            description: 'а впринципе это не так важно, так что поехали однотипные!!!!',
            createdAt: new Date('2020-04-14T14:10:00'),
            author: 'Пестова Анна',
        },
        {
            id: '10',
            description: 'устала',
            createdAt: new Date('2020-04-14T14:21:00'),
            author: 'Пестова Анна',
        },
        {
            id: '11',
            description: 'пара через 5 часов',
            createdAt: new Date('2020-04-14T14:21:30'),
            author: 'Пестова Анна',
        },
        {
            id: '12',
            description: 'на дистанционном обучении заданий задают больше, чем раньше',
            createdAt: new Date('2020-04-14T14:22:00'),
            author: 'Пестова Анна',
        },
        {
            id: '13',
            description: 'я даже не успеваю делать все вовремя',
            createdAt: new Date('2020-04-14T14:22:30'),
            author: 'Пестова Анна',
        },
        {
            id: '14',
            description: 'и при этом некоторые преподаватели любят использовать фразы *ну вы дома ичего не делаете, так что вот вам еще задание*',
            createdAt: new Date('2020-04-14T14:23:00'),
            author: 'Пестова Анна',
        },
        {
            id: '15',
            description: 'я просто снова хочу ходить в универ и все успевать(',
            createdAt: new Date('2020-04-14T14:24:00'),
            author: 'Пестова Анна',
        },
        {
            id: '16',
            description: 'ладно, извините, меня стало слишком много в вашей ленте',
            createdAt: new Date('2020-04-14T14:25:00'),
            author: 'Пестова Анна',
        },
        {
            id: '17',
            description: 'я ботан',
            createdAt: new Date('2020-04-14T14:26:00'),
            author: 'Бегун Юлий',
        },
        {
            id: '18',
            description: 'юлий ботан',
            createdAt: new Date('2020-04-14T14:27:00'),
            author: 'Шикарный Макс',
        },
        {
            id: '19',
            description: 'университетские чебуреки лучшие!!!',
            createdAt: new Date('2020-04-14T14:28:00'),
            author: 'Гном Ник',
        },
        {
            id: '20',
            description: 'miss you :c',
            createdAt: new Date('2020-04-14T14:28:30'),
            author: 'Гном Ник',
        },

    ]
    let empty={
        id: '',
        description: '',
        createdAt: new Date(),
        author: '',
    }
    let newPost={
        id: '21',
        description: 'ff',
        createdAt: new Date('2020-03-14T14:28:30'),
        author: 'l k',
    }
    let edPost={
        description: 'ff',
    }
    function sortDate() {
        return posts.sort((a,b)=> a.createdAt.getTime() > b.createdAt.getTime() ? -1 : 1)
    }

    function getPosts(skip, top, filterConfig){
        sortDate();
        let posts1 = posts.slice();
        if (typeof filterConfig != "undefined") {
            posts1 = posts1.filter(item => {
                for (let key in filterConfig) if (key !== 'createdAt'  && filterConfig[key] !== item[key])
                    return false;
                return true;
            });
        }
        return posts1.slice(skip , skip + top );
    }

    function getPost(id){
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].id === id )
                return posts[i];
        }
        return false;
    }

    function validate1(post){
        for (let key in post) if (!(key in empty) && (key !== 'photoLink'))
            return false;
        if (post.description.length >= 200)
            return false;
        if (post.author.length == 0)
            return false;
        return true;
    }
    function validate2(post){
        for (let key in empty) if (!(key in post))
            return false;
        return true;
    }
    function validatePost(post) {
        if ((validate1(post)) && (validate2(post)))
            return true;
        return false;
    }


    function addPost(post){
        if (!validatePost(post))
            return false;
        if (getPost(post.id))
            return false;
        posts[posts.length] = post;
        return true;

    }
    function editPost(id, post) {
        if (!getPost(id))
            return false;
        if (!validatePost(getPost(id)))
            return false;

        for (let key in getPost(id)) if ((key in post) && (key !== 'id') && (key !== 'author') && (key !== 'createdAt'))
            getPost(id)[key] = post[key];
        return true;

    }


    function removePost(id){
        if (!getPost(id))
            return false;
        posts.splice( posts.findIndex(function callback(element, index, array){
            return element.id === id;
        }),1 );
        return true;
    }


    console.log(getPosts(6,3, {author: 'Пестова Анна'}));
    console.log(getPosts(10,10));
    console.log(getPosts(0,10));
    console.log(getPost('9'));
    console.log(validatePost(newPost));
   console.log(addPost(newPost));
   console.log(editPost('2',edPost));
   console.log( removePost('1'));
   console.log(posts);
} ());