class Cannon extends Spirit {
  constructor(type) {
    if (type > 7 || type < 1) {
      throw new Error('炮的类型只能在1-7之间');
    }
    let data = __g_resource['cannon'][`cannon${type}`];
    super({
      img: data.img,
      w: data.frame.w,
      h: data.frame.h,
      sx: data.frame.x,
      sy: data.frame.y,
      x: 442,
      y: 562,
    });
    this.type = type;


    this.max_tick=2;
    this.max_fame=5;
  }

  setType(newType) {
    if (newType > 7 || newType < 1) {
      throw new Error('大炮的类型只能在1-7之间');
    }
    let data = __g_resource['cannon'][`cannon${newType}`];
    this.img = data.img;
    this.w = data.frame.w;
    this.h = data.frame.h;
    this.sx = data.frame.x;
    this.sy = data.frame.y;
    this.type = newType;
  }
}