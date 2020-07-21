import { Router } from "express";
import chirpStore from "../utils/chirpstore";
import { idText } from "typescript";
const router = Router();

router.get("/", (req, res) => {
  const data = chirpStore.GetChirps();
  //used to reformat the json data so nextid field is removed, and id field is inside object. could do res.send(chirpStore.GetChirps())
  const chirps = Object.keys(data).map((key) => {
    return {
      id: key,
      user: data[key].user,
      msg: data[key].msg,
    };
  });

  res.json(chirps);
  chirps.pop();
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  res.send(chirpStore.GetChirp(id));
});

router.post("/", (req, res) => {
  const chirpObj = {
    user: req.body.user,
    msg: req.body.msg,
  };
  chirpStore.CreateChirp(chirpObj);
  res.send("chirp created");
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const chirpObj = {
    user: req.body.user,
    msg: req.body.msg,
  };
  chirpStore.UpdateChirp(id, chirpObj);
  res.send("Chirp Updated");
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  chirpStore.DeleteChirp(id);
  res.send("Chirp deleted");
});


export default router;
