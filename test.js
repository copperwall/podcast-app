const models = require('./models');
const assert = require('assert');

async function createPodcast() {
    const {Podcast, sequelize} = models;

    await sequelize.sync({force: true});

    const testPodcast = await Podcast.create({
        title: "Test Podcast",
        author: "Test Studio",
        description: "A cool test podcast"
    });

    const dbPodcast = await Podcast.find({
        where: {
            title: "Test Podcast",
            author: "Test Studio"
        }
    });

    assert(dbPodcast.get('title') === "Test Podcast");
    assert(dbPodcast.get('author') === "Test Studio");
    assert(dbPodcast.get('description') === "A cool test podcast");
}

async function getEpisodesFromPodcast() {
    const {Podcast, Episode, sequelize} = models;

    await sequelize.sync({force: true});

    const testPodcast = await Podcast.create({
        title: "Test Podcast",
        author: "Test Studio",
        description: "A cool test podcast"
    });

    const firstEpisode = await Episode.create({
        title: "First Episode",
        description: "First description"
    });
    const secondEpisode = await Episode.create({
        title: "Second Episode",
        description: "Second description"
    });

    testPodcast.addEpisodes([
        firstEpisode,
        secondEpisode
    ]);

    // Assert testPodcast.getEpisodes gets all the right data
    [dbFirstEpisode, dbSecondEpisode] = await testPodcast.getEpisodes();

    assert(dbFirstEpisode.title == "First Episode");
    assert(dbSecondEpisode.title == "Second Episode");

    // Grab each Episode individually and make sure their fields are good and have the same podcastId as the
    // testPodcast. 
}

async function runner() {
    await createPodcast();
    await getEpisodesFromPodcast();
}

runner();