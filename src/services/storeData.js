const { Firestore } = require('@google-cloud/firestore');
const path = require('path');

const pathKey = path.resolve('./submissionmlgc-sabreena-4ee72a94c672.json')
     
async function storeData(id, data) {

  try {
    const db = new Firestore({
      projectId: 'submissionmlgc-sabreena',
      keyFilename: pathKey,
      databaseId: '(default)',
    });
 
    const predictCollection = db.collection('predictions');
    return predictCollection.doc(id).set(data);
  }catch(error) {
    console.error(error);
  }
}
 
module.exports = storeData;