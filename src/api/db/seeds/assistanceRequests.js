exports.seed = knex => {
    return knex('assistanceRequests')
        .del()
        .then(() => {
            const dummyAssistanceRequests = [
                {
                    payload: JSON.stringify({
                        summary: 'Minor issue #1',
                        description: 'Minor issue #1 detailed description',
                        category: 'other',
                        location: {
                            latitude: 123,
                            longitude: 23,
                        },
                    }),
                },
                {
                    payload: JSON.stringify({
                        summary: 'Minor issue #2',
                        description: 'Minor issue #2 detailed description',
                        category: 'other',
                        location: {
                            latitude: 123,
                            longitude: 23,
                        },
                    }),
                },
                {
                    payload: JSON.stringify({
                        summary: 'Minor issue #3',
                        description: 'Minor issue #3 detailed description',
                        category: 'other',
                        location: {
                            latitude: 123,
                            longitude: 23,
                        },
                    }),
                },
                {
                    payload: JSON.stringify({
                        summary: 'Minor issue #4',
                        description: 'Minor issue #4 detailed description',
                        category: 'other',
                        location: {
                            latitude: 123,
                            longitude: 23,
                        },
                    }),
                },
            ];

            return knex('assistanceRequests').insert(dummyAssistanceRequests);
        });
};
