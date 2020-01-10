const map = {
  init: {
    title: "-== Glowing Memory ==-",
    description: `Welcome my friend,
this is an interactive fiction now type start to begin the adventure.
Use text commands to walk around and do things.
Some examples:
    **go** north
    **get** the rope
    **drop** the lantern
    **inventory**
    **look**`
  },
  start: {
    title: "The Forest",
    description: `
    You wake up in a **forest**...
    You can see a **castle** not far from where you are...
    It is late at night...
    You wonder if you should have eaten those mushrooms the old Witch gave you...
    **WHAT SHOULD I DO?**`,
    exits: {
      north: "castle"
    },
    items: []
  },
  castle: {
    title: "",
    description: `
    You finally reached the castle...
    A HUGE door is in front of you...
    **WHAT SHOULD I DO?**`,
    exits: ["forest"],
    items: ["a tin of Spam"]
  },
  forest: {
    title: "",
    description: `
    Is the same forest you've earlier.
    Nothing changed in the last 25 minutes...
    The castle is still there...
    **WHAT SHOULD I DO?**`,
    exits: ["castle"],
    items: []
  },
  help: {
    description: `
    Use text commands to walk around and do things.
    Some examples:
        **go north**
        **get the rope**
        **drop the lantern**
        **inventory**`
  }
};

export { map };
