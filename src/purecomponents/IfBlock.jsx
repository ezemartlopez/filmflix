function IfBlock({condition, children}) {
  return condition? children: null;
}

export default IfBlock;