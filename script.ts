'use strict';

// prettier-ignore

interface IWorkout {
  coords: [number, number];
  distance: number;
  duration: number;
  }

class Workout implements IWorkout {
  date = new Date();
  id = (performance.now() + '').slice(-10);
  clicks = 0;

  constructor(
    public coords: [number, number],
    public distance: number,
    public duration: number
  ) {}

  _setDescription() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

interface IRunning extends IWorkout {
  coords: [number, number];
  distance: number;
  duration: number;
  cadence: number;
  // pace: number;
}

class Running extends Workout implements IRunning {
  type = 'running';

  constructor(coords, distance, duration, public cadence) {
    super(coords, distance, duration);
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

interface ICycling extends IWorkout {
  elevationGain: number;
  speed: number;
}

class Cycling extends Workout implements ICycling {
  type = 'cycling';

  constructor(
    coords: [number, number],
    distance: number,
    duration: number,
    public elevationGain: number
  ) {
    super(coords, distance, duration);
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}
