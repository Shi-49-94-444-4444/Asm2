const Players = require("../models/player");

let clubData = [
  { id: "1", name: "Arsenal" },
  { id: "2", name: "Manchester United" },
  { id: "3", name: "Chelsea" },
  { id: "4", name: "Manchester City" },
  { id: "5", name: "PSG" },
  { id: "6", name: "Inter Milan" },
  { id: "7", name: "Real Madrid" },
  { id: "8", name: "Barcelona" },
];

const positions = [
  { id: "1", name: "GK" },
  { id: "2", name: "CB" },
  { id: "3", name: "DF" },
  { id: "4", name: "LM" },
  { id: "5", name: "CD" },
  { id: "6", name: "CM" },
  { id: "7", name: "RM" },
  { id: "8", name: "RF" },
  { id: "9", name: "LF" },
  { id: "10", name: "CF" },
];

class PlayerController {
  index(req, res, next) {
    Players.find({})
      .then((players) => {
        res.render("players", {
          title: "The list of Players",
          players: players,
          clubList: clubData,
          positions: positions,
        });
      })
      .catch(next);
  }
  create(req, res, next) {
    const player = new Players(req.body);
    player
      .save()
      .then(() => res.redirect("/players"))
      .catch((error) => {});
  }
  formEdit(req, res, next) {
    const playerId = req.params.playerId;
    let viewsData = {};
    Players.findById(playerId)
      .then((player) => {
        res.render("editPlayer", {
          title: "The detail of Player",
          player: player,
          clubList: clubData,
          positions: positions,
        });
      })
      .catch(next);
  }
  edit(req, res, next) {
    const playerId = req.params.playerId;
    Players.updateOne({ _id: playerId }, req.body)
      .then(() => {
        res.redirect("/players");
      })
      .catch(next);
  }
  delete(req, res, next) {
    const playerId = req.params.playerId;
    Players.findByIdAndDelete(playerId)
      .then(() => res.redirect("/players"))
      .catch(next);
  }
}
module.exports = new PlayerController();
