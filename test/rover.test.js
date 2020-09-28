var chai = require('chai')
var expect = chai.expect

const MartianRover = require('../rover.js');


describe('Rover', function() {
  it('Test to check the Rover Class', function() {
    expect(new MartianRover(0,1, 'N','FRF')).to.be.an.instanceOf(MartianRover)
  })

  describe('#constructors', function() {
    it('Test to check rotation equals to N', function() {
      var myRover = new MartianRover(0,1, 'N','FRF')
      expect(myRover.rotation).to.equal('N')
    })

    it('Test to check xAxis is set to 0', function() {
      var myRover = new MartianRover(0,0, 'N', 'FRF')
      expect(myRover.xAxis).to.equal(0)
    })

    it('Test to check yAxis is set to 0', function() {
      var myRover = new MartianRover(0,0, 'N', 'FRF')
      expect(myRover.yAxis).to.equal(0)
    })

    it('Test to check roverOffcourse is set to false', function() {
      var myRover = new MartianRover(0,1, 'N', 'FRF')
      expect(myRover.roverOffcourse).to.equal(false)
    })
  })

  describe('#TurnLeft', function() {
    it('When North rover moves West', function() {
      var myRover = new MartianRover(0,1, 'N', 'FRF')
      myRover.TurnLeft()
      expect(myRover.rotation).to.equal('W')
    })

    it('When West rover moves South', function() {
      var myRover = new MartianRover(0,1, 'W', 'FRF')
      myRover.TurnLeft()
      expect(myRover.rotation).to.equal('S')
    })

    it('When South rover moves East', function() {
      var myRover = new MartianRover(0,1, 'S', 'FRF')
      myRover.TurnLeft()
      expect(myRover.rotation).to.equal('E')
    })

    it('When East rover moves North', function() {
      var myRover = new MartianRover(0,1, 'E', 'FRF')
      myRover.TurnLeft()
      expect(myRover.rotation).to.equal('N')
    })

    it('When West rover moves South', function() {
      var myRover = new MartianRover(0,1, 'W', 'FRF')
      myRover.TurnLeft()
      expect(myRover.rotation).to.equal('S')
    })
  })

  describe('#TurnRight', function() {
    it('When North rover moves East', function() {
      var myRover = new MartianRover(0,1, 'N','FRF')
      myRover.TurnRight()
      expect(myRover.rotation).to.equal('E')
    })

    it('When East rover moves South', function() {
      var myRover = new MartianRover(0,1, 'E', 'FRF')
      myRover.TurnRight()
      expect(myRover.rotation).to.equal('S')
    })

    it('When South rover moves West', function() {
      var myRover = new MartianRover(0,1, 'S', 'FRF')
      myRover.TurnRight()
      expect(myRover.rotation).to.equal('W')
    })

    it('When West rover moves North', function() {
      var myRover = new MartianRover(0,1, 'W', 'FRF')
      myRover.TurnRight()
      expect(myRover.rotation).to.equal('N')
    })
  })

  describe('#GoForward', function() {
    it('Testing yAxis, when rover moves North', function() {
      var myRover = new MartianRover(0,0, 'N', 'FRF')
      myRover.GoForward()
      expect(myRover.yAxis).to.equal(1)
    })

    it('Testing yAxis, when rover moves South', function() {
      var myRover = new MartianRover(0,0, 'S', 'FRF')
      myRover.GoForward()
      expect(myRover.yAxis).to.equal(-1)
    })

    it('Testing xAxis, when rover moves East', function() {
      var myRover = new MartianRover(0,0, 'E', 'FRF')
      myRover.GoForward()
      expect(myRover.xAxis).to.equal(1)
    })

    it('Testing xAxis, when rover moves West', function() {
      var myRover = new MartianRover(0,0, 'W', 'FRF')
      myRover.GoForward()
      expect(myRover.xAxis).to.equal(-1)
    })
  })

   describe('#commandMoves', function() {
    it('Testing command Moves', function() {
      var myRover = new MartianRover(0,0, 'N', 'FRF')
      myRover.commands()
      expect(myRover.xAxis).to.equal(1) && expect(myRover.yAxis).to.equal(1)
    })


   })













})