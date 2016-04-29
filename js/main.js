var $brain = $('.brain-box');
var $volunteer = $('.volunteer');
var $plan = $('.plan');
var $argue = $('.argue');
var $factual = $('.factual');
var $alone = $('.alone');
var $avoid = $('.avoid');
var $priority = $('.prioritize');
var $interest = $('.interest');
var $track = $('.track');
var $possible = $('.possibilities');
var $organize = $('.organize');
var $lecture = $('.lecture');

$brain.waypoint(function (direction) {
  if (direction == 'down') {
    $brain.addClass('js-brain-animate');
  } else {
    $brain.removeClass('js-brain-animate');
  }

}, { offset:'70%'});

$volunteer.waypoint(function (direction) {
  if (direction == 'down') {
    $volunteer.addClass('js-volunteer-animate');
  } else {
    $volunteer.removeClass('js-volunteer-animate');
  }

}, { offset:'70%'});

$plan.waypoint(function (direction) {
  if (direction == 'down') {
    $plan.addClass('js-plan-animate');
  } else {
    $plan.removeClass('js-plan-animate');
  }

}, { offset:'70%'});

$argue.waypoint(function (direction) {
  if (direction == 'down') {
    $argue.addClass('js-argue-animate');
  } else {
    $argue.removeClass('js-argue-animate');
  }

}, { offset:'70%'});

$factual.waypoint(function (direction) {
  if (direction == 'down') {
    $factual.addClass('js-factual-animate');
  } else {
    $factual.removeClass('js-factual-animate');
  }

}, { offset:'70%'});

$alone.waypoint(function (direction) {
  if (direction == 'down') {
    $alone.addClass('js-alone-animate');
  } else {
    $alone.removeClass('js-alone-animate');
  }

}, { offset:'70%'});

$avoid.waypoint(function (direction) {
  if (direction == 'down') {
    $avoid.addClass('js-avoid-animate');
  } else {
    $avoid.removeClass('js-avoid-animate');
  }

}, { offset:'70%'});

$priority.waypoint(function (direction) {
  if (direction == 'down') {
    $priority.addClass('js-priority-animate');
  } else {
    $priority.removeClass('js-priority-animate');
  }

}, { offset:'70%'});

$interest.waypoint(function (direction) {
  if (direction == 'down') {
    $interest.addClass('js-interest-animate');
  } else {
    $interest.removeClass('js-interest-animate');
  }

}, { offset:'70%'});

$track.waypoint(function (direction) {
  if (direction == 'down') {
    $track.addClass('js-track-animate');
  } else {
    $track.removeClass('js-track-animate');
  }

}, { offset:'70%'});

$possible.waypoint(function (direction) {
  if (direction == 'down') {
    $possible.addClass('js-possible-animate');
  } else {
    $possible.removeClass('js-possible-animate');
  }

}, { offset:'70%'});

$organize.waypoint(function (direction) {
  if (direction == 'down') {
    $organize.addClass('js-organize-animate');
  } else {
    $organize.removeClass('js-organize-animate');
  }

}, { offset:'70%'});

$lecture.waypoint(function (direction) {
  if (direction == 'down') {
    $lecture.addClass('js-lecture-animate');
  } else {
    $lecture.removeClass('js-lecture-animate');
  }

}, { offset:'70%'});
