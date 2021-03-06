//! moment-holiday.js locale configuration
//! locale : Denmark
//! author : Alexander Køpke : https://github.com/alexanderkopke

(function() {
  var moment = (typeof require !== 'undefined' && require !== null) && !require.amd ? require('moment') : this.moment;

  moment.holidays.denmark = {
    "Nytårsdag": {
      date: '1/1',
      keywords: ['nytarsdag', 'new', 'years']
    },
    "Skærtorsdag": {
      date: 'easter-3',
      keywords: ['skaertorsdag', 'maundy', 'friday']
    },
    "Skærfredag": {
      date: 'easter-2',
      keywords: ['skaerfredag', 'good', 'friday']
    },
    "Påske": {
      date: 'easter',
      keywords: ['paske', 'easter', 'sunday'],
    },
    "Anden påskedag": {
      date: 'easter+1',
      keywords: ['andenpåskedag', 'andenpaskedag', 'paskedag', 'easter', 'monday']
    },
    "Store bededag": {
      date: 'easter+33',
      keywords: ['great', 'prayer', 'day']
    },
    "Kristi himmelfart": {
      date: 'easter+39',
      keywords: ['ascension']
    },
    "Pinse": {
      date: 'easter+49',
      keywords: ['pentecost']
    },
    "Anden pinse": {
      date: 'easter+50',
      keywords: ['andenpinsedag', 'pinsedag', 'whit', 'monday']
    },
    "Juleaften": {
      date: '12/24',
      keywords: ['christmas']
    },
    "Juledag": {
      date: '12/25',
      keywords: ['juledag'],
      keywords_y: ['første']
    },
    "Anden juledag": {
      date: '12/26',
      keywords: ['andenjuledag'],
      keywords_y: ['anden']
    }
  };

  if ((typeof module !== 'undefined' && module !== null ? module.exports : void 0) != null) { module.exports = moment; }
}).call(this);
