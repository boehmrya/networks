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


  });
