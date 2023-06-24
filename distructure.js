const myObject = {
    prop1: Math.random(),
    prop2: Math.floor(Math.random() * 100),
    prop3: 'Random String ' + Math.random().toString(36).substring(7),
    prop4: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toDateString(),
    prop5: Boolean(Math.round(Math.random())),
    prop6: [Math.random(), Math.random(), Math.random()],
    prop7: null,
    prop8: undefined,
    prop9: {
      nestedProp1: Math.ceil(Math.random() * 10),
      nestedProp2: 'Nested Random String ' + Math.random().toString(36).substring(7)
    },
    prop10: Symbol('randomSymbol')
  };
  console.log(myObject.prop4);
  const {nestedProp1}=myObject.prop9;
  console.log(nestedProp1);
  
  const {prop4}=myObject;
  console.log(prop4);

  const {Order}=myObject;
  console.log(Order);


  const friends=["mahim","Rahim","zimon","minony"];
  const [p1,p2,...rest]=friends;
  console.log(p1);
  console.log(p2);
  console.log(rest);