let obj = {
  name: "Christos",
  email: "cstilidis@gmail.com",
};
Object.freeze(obj)
obj.name = "Chris";
obj.newProp = "38";

console.log(obj);
