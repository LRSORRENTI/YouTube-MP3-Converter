// const express = require('express');
// const router = express.Router();
// const ytdl = require('ytdl-core');
// const ffmpeg = require('fluent-ffmpeg');
// const fs = require('fs');

// router.post('/', async (req, res) => {
//     const url = req.body.url;
//     const filename = Date.now() + '.mp3'; // create a unique filename for each conversion

//     if (ytdl.validateURL(url)) {
//         let stream = ytdl(url, { filter: 'audioonly' });
        
//         await new Promise((resolve, reject) => {
//             ffmpeg(stream)
//                 .audioBitrate(320)
//                 .toFormat('mp3')
//                 .saveToFile(`./public/${filename}.mp3`)
//                 .on('end', resolve)
//                 .on('error', reject);
//         })
//         // send the link to the mp3 file
//         res.json({ link: `/${filename}.mp3` });
//     } else {
//         res.status(400).json({ status: 'error', message: 'Invalid YouTube URL' });
//     }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const ytdl = require('ytdl-core');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const path = require('path')
ffmpeg.setFfmpegPath(ffmpegInstaller.path);

router.post('/', async (req, res) => {
    const url = req.body.url;
    const filename = req.body.filename || Date.now(); 
    // use the provided filename or a timestamp if no filename was provided

    if (ytdl.validateURL(url)) {
        let stream = ytdl(url, { filter: 'audioonly' });
        
        await new Promise((resolve, reject) => {
            ffmpeg(stream)
                .audioBitrate(320)
                .toFormat('mp3')
                .saveToFile(`./MP3-Files/${filename}.mp3`) 
                // include .mp3 extension
                .on('end', resolve)
                .on('error', reject);
        });

        // send the link to the mp3 file
        // res.json({ link: `/${filename}.mp3` }); // include .mp3 extension
        res.json({ link: `/download.html?file=${filename}.mp3` });

    } else {
        res.status(400).json({ status: 'error', message: 'Invalid YouTube URL' });
    }
});

router.get('/MP3-Files/:filename', (req, res) => {
    // Note: Make sure the filename is validated and sanitized to prevent any security issues
    let filename = req.params.filename;
    filename = path.basename(filename)
    res.download(`./MP3-Files/${filename}`, filename, function(err){
        if (err) {
          // handle error
          console.log(`Error:${err}`)
        } else {
          // file sent successfully
        }
    });
});
const deleteFiles = async (dirPath) => {
    try {
        const files = await fs.promises.readdir(dirPath);

        for (const file of files) {
            if (file !== '.gitkeep') { // do not delete .gitkeep file
                await fs.promises.unlink(path.join(dirPath, file));
            }
        }
    } catch (error) {
        console.error("Failed to delete files", error);
    }
};

const schedule = require('node-schedule');

// Schedule a job to delete all files in the directory every 10 minutes
schedule.scheduleJob('*/40 * * * *', function(){
  deleteFiles('./MP3-Files');
});

module.exports = router;
