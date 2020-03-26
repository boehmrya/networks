var state_id =  {
    '01': 'AL',
    '02': 'AK',
    '03': 'AS',
    '04': 'AZ',
    '05': 'AR',
    '06': 'CA',
    '08': 'CO',
    '09': 'CT',
    '10': 'DE',
    '11': 'DC',
    '12': 'FL',
    '13': 'GA',
    '14': 'GU',
    '15': 'HI',
    '16': 'ID',
    '17': 'IL',
    '18': 'IN',
    '19': 'IA',
    '20': 'KS',
    '21': 'KY',
    '22': 'LA',
    '23': 'ME',
    '24': 'MD',
    '25': 'MA',
    '26': 'MI',
    '27': 'MN',
    '28': 'MS',
    '29': 'MO',
    '30': 'MT',
    '31': 'NE',
    '32': 'NV',
    '33': 'NH',
    '34': 'NJ',
    '35': 'NM',
    '36': 'NY',
    '37': 'NC',
    '38': 'ND',
    '39': 'OH',
    '40': 'OK',
    '41': 'OR',
    '42': 'PA',
    '44': 'RI',
    '45': 'SC',
    '46': 'SD',
    '47': 'TN',
    '48': 'TX',
    '49': 'UT',
    '50': 'VT',
    '51': 'VA',
    '53': 'WA',
    '54': 'WV',
    '55': 'WI',
    '56': 'WY'
  };


  var data_states = {
    US: {
      id: 'US',
      name: 'National',
      downstream_growth: {
        overall: 15,
        past_week: 20
      },
      upstream_growth: {
        overall: 23,
        past_week: 30
      },
      network_performance: {
        normal: 88,
        elevated: 7,
        substantially_elevated: 3,
        severely_elevated: 2
      },
      providers: {
        2540: {
         name: 'Altice',
         link: 'https://www.alticeusa.com/'
       },
        2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
        2559: {
          name: 'Cox',
          link: 'http://www.cox.com/'
        },
        2567: {
          name: 'Mediacom',
          link: 'http://www.mediacomcable.com'
        },
        2568: {
          name: 'Midco',
          link: 'http://www.midco.com/'
        },
        2619: {
         name: 'GCI',
         link: 'http://www.gci.com'
       },
        3604: {
          name: 'Vyve',
          link: 'http://www.vyvebroadband.com/'
        }
      }
    },
    AL: {
      id: 'AL',
      name: 'Alabama',
      downstream_growth: {
        overall: 13,
        past_week: 18
      },
      upstream_growth: {
        overall: 21,
        past_week: 28
      },
      network_performance: {
        normal: 86,
        elevated: 9,
        substantially_elevated: 2,
        severely_elevated: 3
      },
      providers: {
         2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
        2567: {
          name: 'Mediacom',
          link: 'http://www.mediacomcable.com'
        }
      }
    },
    AK: {
      id: 'AK',
      name: 'Alaska',
      downstream_growth: {
        overall: 12,
        past_week: 19
      },
      upstream_growth: {
        overall: 22,
        past_week: 27
      },
      network_performance: {
        normal: 85,
        elevated: 10,
        substantially_elevated: 4,
        severely_elevated: 1
      },
      providers: {
         2619: {
          name: 'GCI',
          link: 'http://www.gci.com'
        }
      }
    },
    AZ: {
      id: 'AZ',
      name: 'Arizona',
      downstream_growth: {
        overall: 17,
        past_week: 24
      },
      upstream_growth: {
        overall: 29,
        past_week: 36
      },
      network_performance: {
        normal: 90,
        elevated: 7,
        substantially_elevated: 2,
        severely_elevated: 1
      },
      providers: {
        2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
        2559: {
          name: 'Cox',
          link: 'http://www.cox.com/'
        },
        2567: {
          name: 'Mediacom',
          link: 'http://www.mediacomcable.com'
        }
      }
    },
    AR: {
      id: 'AR',
      name: 'Arkansas',
      downstream_growth: {
        overall: 16,
        past_week: 23
      },
      upstream_growth: {
        overall: 27,
        past_week: 33
      },
      network_performance: {
        normal: 91,
        elevated: 6,
        substantially_elevated: 2,
        severely_elevated: 1
      },
      providers: {
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
        2559: {
          name: 'Cox',
          link: 'http://www.cox.com/'
        },
        3604: {
          name: 'Vyve',
          link: 'http://www.vyvebroadband.com/'
        }
      }
    },
    CA: {
      id: 'CA',
      name: 'California',
      downstream_growth: {
        overall: 15,
        past_week: 22
      },
      upstream_growth: {
        overall: 29,
        past_week: 39
      },
      network_performance: {
        normal: 94,
        elevated: 4,
        substantially_elevated: 2,
        severely_elevated: 0
      },
      providers: {
        2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
        2559: {
          name: 'Cox',
          link: 'http://www.cox.com/'
        },
        2567: {
          name: 'Mediacom',
          link: 'http://www.mediacomcable.com/'
        }
      }
    },
    CO: {
      id: 'CO',
      name: 'Colorado',
      downstream_growth: {
        overall: 24,
        past_week: 29
      },
      upstream_growth: {
        overall: 33,
        past_week: 37
      },
      network_performance: {
        normal: 95,
        elevated: 2,
        substantially_elevated: 2,
        severely_elevated: 1
      },
      providers: {
         2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
        2566: {
          name: 'Eagle Communications',
          link: 'http://www.eaglecom.net/'
        },
        3604: {
          name: 'Vyve',
          link: 'http://www.vyvebroadband.com/'
        }
      }
    },
    CT: {
      id: 'CT',
      name: 'Connecticut',
      downstream_growth: {
        overall: 23,
        past_week: 28
      },
      upstream_growth: {
        overall: 32,
        past_week: 36
      },
      network_performance: {
        normal: 94,
        elevated: 4,
        substantially_elevated: 1,
        severely_elevated: 1
      },
      providers: {
        2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
        2559: {
          name: 'Cox',
          link: 'http://www.cox.com/'
        }
      }
    },
    DE: {
      id: 'DE',
      name: 'Delaware',
      downstream_growth: {
        overall: 20,
        past_week: 26
      },
      upstream_growth: {
        overall: 35,
        past_week: 38
      },
      network_performance: {
        normal: 87,
        elevated: 8,
        substantially_elevated: 3,
        severely_elevated: 2
      },
      providers: {
         2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
        2567: {
          name: 'Mediacom',
          link: 'http://www.mediacomcable.com/'
        }
      }
    },
    DC: {
      id: 'DC',
      name: 'District Of Columbia',
      downstream_growth: {
        overall: 18,
        past_week: 22
      },
      upstream_growth: {
        overall: 27,
        past_week: 33
      },
      network_performance: {
        normal: 86,
        elevated: 9,
        substantially_elevated: 3,
        severely_elevated: 2
      },
      providers: {
         2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        }
      }
    },
    FL: {
      id: 'FL',
      name: 'Florida',
      downstream_growth: {
        overall: 19,
        past_week: 24
      },
      upstream_growth: {
        overall: 26,
        past_week: 31
      },
      network_performance: {
        normal: 89,
        elevated: 9,
        substantially_elevated: 1,
        severely_elevated: 1
      },
      providers: {
         2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },  2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },  2559: {
          name: 'Cox',
          link: 'http://www.cox.com/'
        },  2567: {
          name: 'Mediacom',
          link: 'http://www.mediacomcable.com/'
        }
      }
    },
    GA: {
      id: 'GA',
      name: 'Georgia',
      downstream_growth: {
        overall: 21,
        past_week: 25
      },
      upstream_growth: {
        overall: 24,
        past_week: 33
      },
      network_performance: {
        normal: 92,
        elevated: 4,
        substantially_elevated: 2,
        severely_elevated: 2
      },
      providers: {
         2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },  2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },  2559: {
          name: 'Cox',
          link: 'http://www.cox.com/'
        },  2567: {
          name: 'Mediacom',
          link: 'http://www.mediacomcable.com/'
        },  3604: {
          name: 'Vyve',
          link: 'http://www.vyvebroadband.com/'
        }
      }
    },
    HI: {
      id: 'HI',
      name: 'Hawaii',
      downstream_growth: {
        overall: 22,
        past_week: 24
      },
      upstream_growth: {
        overall: 25,
        past_week: 32
      },
      network_performance: {
        normal: 91,
        elevated: 5,
        substantially_elevated: 2,
        severely_elevated: 2
      },
      providers: {
         2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        }
      }
    },
    ID: {
      id: 'ID',
      name: 'Idaho',
      downstream_growth: {
        overall: 26,
        past_week: 29
      },
      upstream_growth: {
        overall: 28,
        past_week: 38
      },
      network_performance: {
        normal: 94,
        elevated: 3,
        substantially_elevated: 2,
        severely_elevated: 1
      },
      providers: {
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
        2559: {
          name: 'Cox',
          link: 'http://www.cox.com/'
        },
        2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        }
      }
    },
    IL: {
      id: 'IL',
      name: 'Illinois',
      downstream_growth: {
        overall: 28,
        past_week: 32
      },
      upstream_growth: {
        overall: 32,
        past_week: 37
      },
      network_performance: {
        normal: 95,
        elevated: 3,
        substantially_elevated: 1,
        severely_elevated: 1
      },
      providers: {
        2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
        2567: {
          name: 'Mediacom',
          link: 'http://www.mediacomcable.com/'
        }
      }
    },
    IN: {
      id: 'IN',
      name: 'Indiana',
      downstream_growth: {
        overall: 23,
        past_week: 30
      },
      upstream_growth: {
        overall: 31,
        past_week: 34
      },
      network_performance: {
        normal: 90,
        elevated: 4,
        substantially_elevated: 3,
        severely_elevated: 3
      },
      providers: {
         2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
        2567: {
          name: 'Mediacom',
          link: 'http://www.mediacomcable.com/'
        }
      }
    },
    IA: {
      id: 'IA',
      name: 'Iowa',
      downstream_growth: {
        overall: 25,
        past_week: 31
      },
      upstream_growth: {
        overall: 32,
        past_week: 35
      },
      network_performance: {
        normal: 91,
        elevated: 3,
        substantially_elevated: 3,
        severely_elevated: 3
      },
      providers: {
         2559: {
          name: 'Cox',
          link: 'http://www.cox.com/'
        },
        2567: {
          name: 'Mediacom',
          link: 'http://www.mediacomcable.com/'
        }
      }
    },
    KS: {
      id: 'KS',
      name: 'Kansas',
      downstream_growth: {
        overall: 23,
        past_week: 29
      },
      upstream_growth: {
        overall: 31,
        past_week: 33
      },
      network_performance: {
        normal: 92,
        elevated: 2,
        substantially_elevated: 3,
        severely_elevated: 3
      },
      providers: {
        2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
         2559: {
          name: 'Cox',
          link: 'http://www.cox.com/'
        },
        2566: {
          name: 'Eagle Communications',
          link: 'http://www.eaglecom.net/'
        },
        2567: {
          name: 'Mediacom',
          link: 'http://www.mediacomcable.com/'
        },
        2568: {
          name: 'Midco',
          link: 'http://www.midco.com/'
        },
        3604: {
          name: 'Vyve',
          link: 'http://www.vyvebroadband.com/'
        }
      }
    },
    KY: {
      id: 'KY',
      name: 'Kentucky',
      downstream_growth: {
        overall: 22,
        past_week: 27
      },
      upstream_growth: {
        overall: 34,
        past_week: 37
      },
      network_performance: {
        normal: 93,
        elevated: 5,
        substantially_elevated: 1,
        severely_elevated: 1
      },
      providers: {
        2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
         2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
        2567: {
          name: 'Mediacom',
          link: 'http://www.mediacomcable.com/'
        }
      }
    },
    LA: {
      id: 'LA',
      name: 'Louisiana',
      downstream_growth: {
        overall: 26,
        past_week: 29
      },
      upstream_growth: {
        overall: 32,
        past_week: 38
      },
      network_performance: {
        normal: 94,
        elevated: 2,
        substantially_elevated: 2,
        severely_elevated: 2
      },
      providers: {
         2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
        2559: {
          name: 'Cox',
          link: 'http://www.cox.com/'
        },
        3604: {
          name: 'Vyve',
          link: 'http://www.vyvebroadband.com/'
        }
      }
    },
    ME: {
      id: 'ME',
      name: 'Maine',
      downstream_growth: {
        overall: 25,
        past_week: 28
      },
      upstream_growth: {
        overall: 36,
        past_week: 39
      },
      network_performance: {
        normal: 84,
        elevated: 10,
        substantially_elevated: 3,
        severely_elevated: 3
      },
      providers: {
         2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
        2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        }
      }
    },
    MD: {
      id: 'MD',
      name: 'Maryland',
      downstream_growth: {
        overall: 28,
        past_week: 33
      },
      upstream_growth: {
        overall: 34,
        past_week: 37
      },
      network_performance: {
        normal: 82,
        elevated: 10,
        substantially_elevated: 5,
        severely_elevated: 3
      },
      providers: {
         2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
        2567: {
          name: 'Mediacom',
          link: 'http://www.mediacomcable.com/'
        }
      }
    },
    MA: {
      id: 'MA',
      name: 'Massachusetts',
      downstream_growth: {
        overall: 29,
        past_week: 35
      },
      upstream_growth: {
        overall: 32,
        past_week: 38
      },
      network_performance: {
        normal: 80,
        elevated: 13,
        substantially_elevated: 4,
        severely_elevated: 3
      },
      providers: {
         2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
        2559: {
          name: 'Cox',
          link: 'http://www.cox.com/'
        }
      }
    },
    MI: {
      id: 'MI',
      name: 'Michigan',
      downstream_growth: {
        overall: 31,
        past_week: 34
      },
      upstream_growth: {
        overall: 36,
        past_week: 40
      },
      network_performance: {
        normal: 81,
        elevated: 12,
        substantially_elevated: 3,
        severely_elevated: 4
      },
      providers: {
         2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
        2567: {
          name: 'Mediacom',
          link: 'http://www.mediacomcable.com/'
        }
      }
    },
    MN: {
      id: 'MN',
      name: 'Minnesota',
      downstream_growth: {
        overall: 23,
        past_week: 28
      },
      upstream_growth: {
        overall: 29,
        past_week: 34
      },
      network_performance: {
        normal: 84,
        elevated: 6,
        substantially_elevated: 6,
        severely_elevated: 4
      },
      providers: {
         2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
        2567: {
          name: 'Mediacom',
          link: 'http://www.mediacomcable.com/'
        },
        2568: {
          name: 'Midco',
          link: 'http://www.midco.com/'
        },
        2620: {
          name: 'Sjoberg\'s',
          link: 'http://trf.mncable.net/'
        }
      }
    },
    MS: {
      id: 'MS',
      name: 'Mississippi',
      downstream_growth: {
        overall: 26,
        past_week: 29
      },
      upstream_growth: {
        overall: 32,
        past_week: 35
      },
      network_performance: {
        normal: 87,
        elevated: 5,
        substantially_elevated: 4,
        severely_elevated: 4
      },
      providers: {
         2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
        2567: {
          name: 'Mediacom',
          link: 'http://www.mediacomcable.com/'
        }
      }
    },
    MO: {
      id: 'MO',
      name: 'Missouri',
      downstream_growth: {
        overall: 29,
        past_week: 34
      },
      upstream_growth: {
        overall: 37,
        past_week: 39
      },
      network_performance: {
        normal: 88,
        elevated: 7,
        substantially_elevated: 3,
        severely_elevated: 2
      },
      providers: {
         2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
        2567: {
          name: 'Mediacom',
          link: 'http://www.mediacomcable.com/'
        }
      }
    },
    MT: {
      id: 'MT',
      name: 'Montana',
      downstream_growth: {
        overall: 27,
        past_week: 32
      },
      upstream_growth: {
        overall: 35,
        past_week: 38
      },
      network_performance: {
        normal: 89,
        elevated: 5,
        substantially_elevated: 3,
        severely_elevated: 3
      },
      providers: {
         2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        }
      }
    },
    NE: {
      id: 'NE',
      name: 'Nebraska',
      downstream_growth: {
        overall: 21,
        past_week: 28
      },
      upstream_growth: {
        overall: 29,
        past_week: 36
      },
      network_performance: {
        normal: 92,
        elevated: 4,
        substantially_elevated: 2,
        severely_elevated: 2
      },
      providers: {
         2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2559: {
          name: 'Cox',
          link: 'http://www.cox.com/'
        },
        2566: {
          name: 'Eagle Communications',
          link: 'http://www.eaglecom.net/'
        }
      }
    },
    NV: {
      id: 'NV',
      name: 'Nevada',
      downstream_growth: {
        overall: 25,
        past_week: 29
      },
      upstream_growth: {
        overall: 26,
        past_week: 37
      },
      network_performance: {
        normal: 84,
        elevated: 8,
        substantially_elevated: 4,
        severely_elevated: 4
      },
      providers: {
         2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2559: {
          name: 'Cox',
          link: 'http://www.cox.com/'
        }
      }
    },
    NH: {
      id: 'NH',
      name: 'New Hampshire',
      downstream_growth: {
        overall: 31,
        past_week: 36
      },
      upstream_growth: {
        overall: 35,
        past_week: 40
      },
      network_performance: {
        normal: 88,
        elevated: 6,
        substantially_elevated: 3,
        severely_elevated: 3
      },
      providers: {
         2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        }
      }
    },
    NJ: {
      id: 'NJ',
      name: 'New Jersey',
      downstream_growth: {
        overall: 33,
        past_week: 36
      },
      upstream_growth: {
        overall: 38,
        past_week: 40
      },
      network_performance: {
        normal: 89,
        elevated: 6,
        substantially_elevated: 2,
        severely_elevated: 3
      },
      providers: {
        2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
        2570: {
          name: 'Service Electric Cable TV &amp; Communications',
          link: 'http://www.sectv.com/'
        }
      }
    },
    NM: {
      id: 'NM',
      name: 'New Mexico',
      downstream_growth: {
        overall: 35,
        past_week: 38
      },
      upstream_growth: {
        overall: 36,
        past_week: 40
      },
      network_performance: {
        normal: 87,
        elevated: 8,
        substantially_elevated: 2,
        severely_elevated: 3
      },
      providers: {
        2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
         2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        }
      }
    },
    NY: {
      id: 'NY',
      name: 'New York',
      downstream_growth: {
        overall: 33,
        past_week: 38
      },
      upstream_growth: {
        overall: 34,
        past_week: 40
      },
      network_performance: {
        normal: 86,
        elevated: 7,
        substantially_elevated: 4,
        severely_elevated: 3
      },
      providers: {
        2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
        2567: {
          name: 'Mediacom',
          link: 'http://www.mediacomcable.com/'
        }
      }
    },
    NC: {
      id: 'NC',
      name: 'North Carolina',
      downstream_growth: {
        overall: 27,
        past_week: 35
      },
      upstream_growth: {
        overall: 32,
        past_week: 39
      },
      network_performance: {
        normal: 85,
        elevated: 9,
        substantially_elevated: 3,
        severely_elevated: 3
      },
      providers: {
         2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
        2559: {
          name: 'Cox',
          link: 'http://www.cox.com/'
        },
        2567: {
          name: 'Mediacom',
          link: 'http://www.mediacomcable.com/'
        }
      }
    },
    ND: {
      id: 'ND',
      name: 'North Dakota',
      downstream_growth: {
        overall: 25,
        past_week: 33
      },
      upstream_growth: {
        overall: 31,
        past_week: 37
      },
      network_performance: {
        normal: 82,
        elevated: 8,
        substantially_elevated: 5,
        severely_elevated: 5
      },
      providers: {
         2568: {
          name: 'Midco',
          link: 'http://www.midco.com/'
        }
      }
    },
    OH: {
      id: 'OH',
      name: 'Ohio',
      downstream_growth: {
        overall: 22,
        past_week: 31
      },
      upstream_growth: {
        overall: 33,
        past_week: 36
      },
      network_performance: {
        normal: 86,
        elevated: 4,
        substantially_elevated: 5,
        severely_elevated: 5
      },
      providers: {
        2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
         2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
        2559: {
          name: 'Cox',
          link: 'http://www.cox.com/'
        },
        2567: {
          name: 'Mediacom',
          link: 'http://www.mediacomcable.com/'
        }
      }
    },
    OK: {
      id: 'OK',
      name: 'Oklahoma',
      downstream_growth: {
        overall: 24,
        past_week: 32
      },
      upstream_growth: {
        overall: 23,
        past_week: 36
      },
      network_performance: {
        normal: 85,
        elevated: 4,
        substantially_elevated: 6,
        severely_elevated: 5
      },
      providers: {
         2559: {
          name: 'Cox',
          link: 'http://www.cox.com/'
        },
        3604: {
          name: 'Vyve',
          link: 'http://www.vyvebroadband.com/'
        }
      }
    },
    OR: {
      id: 'OR',
      name: 'Oregon',
      downstream_growth: {
        overall: 26,
        past_week: 31
      },
      upstream_growth: {
        overall: 23,
        past_week: 39
      },
      network_performance: {
        normal: 87,
        elevated: 8,
        substantially_elevated: 2,
        severely_elevated: 3
      },
      providers: {
         2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        }
      }
    },
    PA: {
      id: 'PA',
      name: 'Pennsylvania',
      downstream_growth: {
        overall: 28,
        past_week: 37
      },
      upstream_growth: {
        overall: 28,
        past_week: 39
      },
      network_performance: {
        normal: 89,
        elevated: 8,
        substantially_elevated: 2,
        severely_elevated: 1
      },
      providers: {
         2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
        2570: {
          name: 'Service Electric Cable TV &amp; Communications',
          link: 'http://www.sectv.com/'
        }
      }
    },
    RI: {
      id: 'RI',
      name: 'Rhode Island',
      downstream_growth: {
        overall: 26,
        past_week: 36
      },
      upstream_growth: {
        overall: 27,
        past_week: 37
      },
      network_performance: {
        normal: 85,
        elevated: 6,
        substantially_elevated: 5,
        severely_elevated: 4
      },
      providers: {
         2559: {
          name: 'Cox',
          link: 'http://www.cox.com/'
        }
      }
    },
    SC: {
      id: 'SC',
      name: 'South Carolina',
      downstream_growth: {
        overall: 25,
        past_week: 34
      },
      upstream_growth: {
        overall: 24,
        past_week: 31
      },
      network_performance: {
        normal: 89,
        elevated: 4,
        substantially_elevated: 6,
        severely_elevated: 1
      },
      providers: {
         2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        }
      }
    },
    SD: {
      id: 'SD',
      name: 'South Dakota',
      downstream_growth: {
        overall: 27,
        past_week: 32
      },
      upstream_growth: {
        overall: 23,
        past_week: 32
      },
      network_performance: {
        normal: 91,
        elevated: 4,
        substantially_elevated: 3,
        severely_elevated: 2
      },
      providers: {
         2567: {
          name: 'Mediacom',
          link: 'http://www.mediacomcable.com/'
        },
        2568: {
          name: 'Midco',
          link: 'http://www.midco.com/'
        }
      }
    },
    TN: {
      id: 'TN',
      name: 'Tennessee',
      downstream_growth: {
        overall: 29,
        past_week: 36
      },
      upstream_growth: {
        overall: 22,
        past_week: 31
      },
      network_performance: {
        normal: 92,
        elevated: 3,
        substantially_elevated: 3,
        severely_elevated: 2
      },
      providers: {
         2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
        2567: {
          name: 'Mediacom',
          link: 'http://www.mediacomcable.com/'
        },
        3604: {
          name: 'Vyve',
          link: 'http://www.vyvebroadband.com/'
        }
      }
    },
    TX: {
      id: 'TX',
      name: 'Texas',
      downstream_growth: {
        overall: 30,
        past_week: 35
      },
      upstream_growth: {
        overall: 23,
        past_week: 29
      },
      network_performance: {
        normal: 94,
        elevated: 3,
        substantially_elevated: 2,
        severely_elevated: 1
      },
      providers: {
         2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
        3604: {
          name: 'Vyve',
          link: 'http://www.vyvebroadband.com/'
        }
      }
    },
    UT: {
      id: 'UT',
      name: 'Utah',
      downstream_growth: {
        overall: 33,
        past_week: 38
      },
      upstream_growth: {
        overall: 22,
        past_week: 28
      },
      network_performance: {
        normal: 93,
        elevated: 3,
        substantially_elevated: 2,
        severely_elevated: 2
      },
      providers: {
         2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        }
      }
    },
    VT: {
      id: 'VT',
      name: 'Vermont',
      downstream_growth: {
        overall: 34,
        past_week: 36
      },
      upstream_growth: {
        overall: 23,
        past_week: 27
      },
      network_performance: {
        normal: 91,
        elevated: 5,
        substantially_elevated: 2,
        severely_elevated: 2
      },
      providers: {
         2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        }
      }
    },
    VA: {
      id: 'VA',
      name: 'Virginia',
      downstream_growth: {
        overall: 37,
        past_week: 39
      },
      upstream_growth: {
        overall: 26,
        past_week: 29
      },
      network_performance: {
        normal: 84,
        elevated: 6,
        substantially_elevated: 6,
        severely_elevated: 4
      },
      providers: {
         2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
        2559: {
          name: 'Cox',
          link: 'http://www.cox.com/'
        }
      }
    },
    WA: {
      id: 'WA',
      name: 'Washington',
      downstream_growth: {
        overall: 38,
        past_week: 40
      },
      upstream_growth: {
        overall: 28,
        past_week: 30
      },
      network_performance: {
        normal: 83,
        elevated: 6,
        substantially_elevated: 6,
        severely_elevated: 5
      },
      providers: {
         2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        }
      }
    },
    WV: {
      id: 'WV',
      name: 'West Virginia',
      downstream_growth: {
        overall: 36,
        past_week: 39
      },
      upstream_growth: {
        overall: 27,
        past_week: 32
      },
      network_performance: {
        normal: 85,
        elevated: 4,
        substantially_elevated: 6,
        severely_elevated: 5
      },
      providers: {
         2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
        2560: {
          name: 'Charter',
          link: 'http://www.charter.net'
        }
      }
    },
    WI: {
      id: 'WI',
      name: 'Wisconsin',
      downstream_growth: {
        overall: 34,
        past_week: 38
      },
      upstream_growth: {
        overall: 26,
        past_week: 31
      },
      network_performance: {
        normal: 88,
        elevated: 6,
        substantially_elevated: 2,
        severely_elevated: 2
      },
      providers: {
         2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        2558: {
          name: 'Comcast',
          link: 'http://www.comcast.com/'
        },
        2567: {
          name: 'Mediacom',
          link: 'http://www.mediacomcable.com/'
        },
        2568: {
          name: 'Midco',
          link: 'http://www.midco.com/'
        }
      }
    },
    WY: {
      id: 'WY',
      name: 'Wyoming',
      downstream_growth: {
        overall: 32,
        past_week: 39
      },
      upstream_growth: {
        overall: 22,
        past_week: 32
      },
      network_performance: {
        normal: 87,
        elevated: 5,
        substantially_elevated: 5,
        severely_elevated: 2
      },
      providers: {
         2560: {
          name: 'Charter',
          link: 'http://www.charter.net/'
        },
        3604: {
          name: 'Vyve',
          link: 'http://www.vyvebroadband.com/'
        }
      }
    }
  }




jQuery(function($){

  var w, width, height, wScale, hScale, mapSize;

  w = $(window).width();
  //Width and height of map
  if (w > 1280) {
    width = 740;
    height = 523;
    mapSize = 1000;
  }
  else if (w > 1200) {
    width = 700;
    height = 496;
    mapSize = 900;
  }
  else {
    width = 614;
    height = 434;
    mapSize = 800;
  }

  // dictionary to hold geoid and associated property data
  var geoDict = {};

  // D3 Projection
  var projection = d3.geo.albersUsa()
  				   .translate([width/2, height/2.2])    // translate to center of screen
  				   .scale([mapSize]);          // scale things down so see entire US

  // Define path generator
  var path = d3.geo.path()               // path generator that will convert GeoJSON to SVG paths
  		  	 .projection(projection);  // tell path generator to use albersUsa projection


  //Create SVG element and append map to the SVG
  var svg = d3.select("#broadband-metrics-map")
  			.append("svg")
  			.attr("width", width)
  			.attr("height", height);

  // Load GeoJSON for US States
  d3.json("maps/us-states.json", function(json) {

    // Bind the data to the SVG and create one path per GeoJSON feature
    // This builds the map
    svg.selectAll("path")
      .data(json.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("id", function(d) { return state_id[d.id]; })
      .attr("class", 'state')
      .style("cursor", "pointer")
      .style("stroke", "rgb(255,255,255)")
      .style("stroke-width", "1")
      .style("fill", "rgb(52, 63, 73)")
      .on('mouseover', function(d, i) {
        if (!d3.select(this).classed('active')) {
          d3.select(this).style('fill', 'rgb(198, 242, 255)'); // change to blue on hover
        }
      })
      .on('mouseout', function(d, i) {
        if (!d3.select(this).classed('active')) {
          d3.select(this).style('fill', 'rgb(52, 63, 73)'); // remove blue
        }
      })
      .on('click', function(d, i) {
        d3.selectAll('path').classed('active', false); // remove active classes
        d3.selectAll('path').style({ 'fill': 'rgb(52, 63, 73)' }); // clear all colors
        d3.select(this).attr('class', 'active'); // add active class to current element
        d3.select(this).style('fill', 'rgb(90, 201, 231)'); // fill current clicked state with blue
      });



      // update information in sidebar card
      // runs when dot is clicked or option in dropdown is selected
      function updateCard(state_id) {
        // get location from dict
        var location = data_states[state_id];

        // parse name of metro area to add space around hyphens
        var name = location.NAME;
        if (name.indexOf("-") >= 0) {
          nameParts = name.split("-");
          name = nameParts.join(" - ");
        }

        // change dot class and color in card
        $("#metro-area .name").html(name);

        // change stats in card
        $("#access-rate").html((location.access_rate*100).toFixed(1) + '%');
        $("#subscription-rate").html((location.subscription_rate*100).toFixed(1) + '%');
        $("#population").html(Math.floor(location.population).toLocaleString());
        $("#with-subscription").html(Math.floor(location.with_subscription).toLocaleString());
        $("#without-subscription").html(Math.floor(location.without_subscription).toLocaleString());
      }



    });


    // populate the state dropdown
    $.each(data_states, function(i, v){
      console.log(v);
      $("#filterFormStateSelect").append("<option value=\""+ i +"\">" + this.name + "</option>");
    });


  });
