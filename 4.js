function ElectricalAppliances(name, power){
    this.permissibleload = 1320,
    this.name = name,
    this.power = power
  }
  
  ElectricalAppliances.prototype.getPower = function(power, name, permissibleload){
    if (power <= permissibleload){
      console.log(`Прибор ${name} можно включить в розетку`)
    }else if(power > permissibleload){
      console.log(`Прибор ${name} не включать в розетку`)
    }
  }
  function Computer(name, power, operatingsystem, cpu, brightness){
      this.name = name,
      this.power = power,
      this.operatingsystem = operatingsystem,
      this.cpu = cpu,
      this.brightness = brightness
    }
  
  Computer.prototype = new ElectricalAppliances()
  
  Computer.prototype.getBrightness = function(brightness){
    console.log(`Настроить на ${brightness} % яркость экрана компьютера`)
  }
  
  function Desklamp(name, power, luminousflux, height){
      this.name = name,
      this.power = power,
      this.luminousflux = luminousflux,
      this.height = height
    }
  
  Desklamp.prototype = new ElectricalAppliances()
  
  Desklamp.prototype.getHeight = function(height){
    console.log(`Установить на ${height} см. высоту настольной лампы`)
  }
  
  const desktopcomputer = new Computer('desktopcomputer', 400, 'window 10', 'intel', 90);
  const notebook = new Computer('notebook', 100, 'window 7', 'core', 80);
  const incandescentlamp = new Desklamp('incandescentlamp', 80, 300, 30);
  const ledlamp = new Desklamp('ledlamp', 60, 200, 25);
  
  desktopcomputer.getPower(400, 'desktopcomputer', 1320);
  notebook.getPower(100, 'notebook', 1320);
  incandescentlamp.getPower(80, 'incandescentlamp', 1320);
  ledlamp.getPower(60, 'ledlamp', 1320);
  
  desktopcomputer.getBrightness(90);
  notebook.getBrightness(80);
  incandescentlamp.getHeight(30);
  ledlamp.getHeight(25);
  
  