var projects = [
  {
    name: 'Art Victim',
    data_name: 'art-victim',
    project_url: 'https://art-victim.herokuapp.com/',
    github_url: 'https://github.com/lionsdwarf/art-victim',
    description: 'Custom e-card and collage maker. Users select graphics and manipulate images on a live canvas. Sortables control layering.',
    dom_el: '#row-0-col-1'
  },
  {
    name: 'JAC Soundfactory',
    data_name: 'jac-soundfactory',
    project_url: 'http://jac-sound-factory.herokuapp.com/',
    github_url: 'https://github.com/qodesmith/JAC-Sound-Factory',
    description: 'A sound sequencer that records, saves and replays custom music tracks. Sound catalogues allow users to dynamically populate the instrument keys.',
    dom_el: '#row-1-col-0'
  },
  {
    name: 'Happy Plant.r',
    data_name: 'happy-plantr',
    project_url: 'https://happy-plantr.herokuapp.com/',
    github_url: 'https://github.com/lionsdwarf/happy-plant',
    description: 'A watering notification tool for plant owners. Sends MMS notifications according to user-defined plant watering schedules.',
    dom_el: '#row-1-col-1'
  }
];

var techStackLeft = {
  dom_el: '#tech-stack-left',
  technologies: [
  'Javascript',
  'Backbone',
  'Node',
  'jQuery',
  'HTML5',
  'CSS3' 
  ]
};

var techStackRight = {
  dom_el: '#tech-stack-right',
  technologies: [
  'PostgreSQL',
  'Ruby',
  'Rails',
  'Github',
  'Mocha',
  'RSpec' 
  ]
};