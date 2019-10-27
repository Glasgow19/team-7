exports.seed = knex => {
    return knex('feedbacks')
        .del()
        .then(() => {
            const dummyFeedbacks = [
                {
                    score: 5,
                    text: 'Everything is perfect',
                },
                {
                    score: 5,
                    text: 'Everything is perfect',
                },
                {
                    score: 5,
                    text: 'Everything is perfect',
                },
                {
                    score: 5,
                    text: 'Everything is perfect',
                },
                {
                    score: 5,
                    text: 'Everything is perfect',
                },
                {
                    score: 4,
                    text: 'Everything is perfect',
                },
                {
                    score: 4,
                    text: 'Everything is perfect',
                },
                {
                    score: 4,
                    text: 'Everything is perfect',
                },
                {
                    score: 3,
                    text: 'Everything is perfect',
                },
                {
                    score: 3,
                    text: 'Everything is perfect',
                },
                {
                    score: 3,
                    text: 'Everything is perfect',
                },
                {
                    score: 3,
                    text: 'Everything is perfect',
                },
                {
                    score: 3,
                    text: 'Everything is perfect',
                },
                {
                    score: 3,
                    text: 'Everything is perfect',
                },
                {
                    score: 2,
                    text: 'Everything is perfect',
                },
                {
                    score: 2,
                    text: 'Everything is perfect',
                },
                {
                    score: 2,
                    text: 'Everything is perfect',
                },
                {
                    score: 2,
                    text: 'Everything is perfect',
                },
                {
                    score: 1,
                    text: 'Bad',
                },
            ];

            return knex('feedbacks').insert(dummyFeedbacks);
        });
};
