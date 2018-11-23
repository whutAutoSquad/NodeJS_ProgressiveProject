let db_config = {
  domain: 'localhost',
  port: '27017',
  db_name: {
    infos: 'infos',
    static_infos: 'static_infos',
  },
  collection: {
    infos: {
      test: 'test',
      person: 'person',
      info_person_en: 'info_person_en',
    },
    static_infos: {
      area_infos: 'area_infos',
      race_infos: 'race_infos',
      school_infos: 'school_infos',
    }
  }
}

module.exports = db_config;