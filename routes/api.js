const express = require('express');
const router = express.Router();
const fs = require('fs');
const { exec } = require('child_process');

const pathToTx1File = `/home/vano/apiNode/antennaParams/tx1.qth`;
const pathToSdf = `/home/vano/apiNode/sdf`;
const heightOfReceiverAntenna = `10`;
const radiusOfCalculation = `10`;
const nameOfppm = `test.ppm`;
const commandForMakingKML = `splat -t ${pathToTx1File} -L ${heightOfReceiverAntenna} -R ${radiusOfCalculation} -dbm -metric -o ${nameOfppm} -d ${pathToSdf} -kml`;

router.post('/api/kml', (req, res) => {
    console.log(req.body);
    exec(commandForMakingKML, (err) => {
        if (err) throw err;
    });
    // res.attachment(`./test.kml`);
    // fs.writeFile('./antennaParams/tx1.qth', 'Hello sddsfsdfsdfsdfsdfs\ndfsdfsfsd', (err) => {
    //     if (err) throw err;
    //     console.log("saved");
    // });

    res.send({
        ...req.body,
        type: 'POST',
        pathToFile: `./test.kml`
    });
});

router.get('/api/test.kml', (req, res) => {
    res.download(`./test.kml`);
});

module.exports = router;