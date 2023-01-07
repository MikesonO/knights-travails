const Node = (location, path) => {
  if(location[0] < 0 || location[0] > 7 || location [1] < 0 || location[1] > 7){
    return null;
  }

  return {location, path}
}

export default Node;