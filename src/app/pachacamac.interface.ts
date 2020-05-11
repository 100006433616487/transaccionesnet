// Stores the currently-being-typechecked object for error messages.
let obj: any = null;
export class PedidosEnityProxy {
  public readonly id: number;
  public readonly idClientes: number;
  public readonly idEmpleados: number;
  public readonly fechaPed: string;
  public readonly fechaEntr: string;
  public readonly fechaEnv: string;
  public readonly idTransportes: number;
  public readonly cargo: number;
  public readonly destinatario: string;
  public readonly dirDestinatario: string;
  public readonly ciudadDest: string;
  public readonly regDestinatario: string;
  public readonly cpostalDes: string;
  public readonly idPaises: number;
  public readonly idClientesNavigation: null;
  public readonly idEmpleadosNavigation: null;
  public readonly idPaisesNavigation: null;
  public readonly idTransportesNavigation: null;
  public readonly detPeds: DetPedsEntityProxy[] | null;
  public static Parse(d: string): PedidosEnityProxy {
    return PedidosEnityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): PedidosEnityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.id, false, field + ".id");
    checkNumber(d.idClientes, false, field + ".idClientes");
    checkNumber(d.idEmpleados, false, field + ".idEmpleados");
    checkString(d.fechaPed, false, field + ".fechaPed");
    checkString(d.fechaEntr, false, field + ".fechaEntr");
    checkString(d.fechaEnv, false, field + ".fechaEnv");
    checkNumber(d.idTransportes, false, field + ".idTransportes");
    checkNumber(d.cargo, false, field + ".cargo");
    checkString(d.destinatario, false, field + ".destinatario");
    checkString(d.dirDestinatario, false, field + ".dirDestinatario");
    checkString(d.ciudadDest, false, field + ".ciudadDest");
    checkString(d.regDestinatario, false, field + ".regDestinatario");
    checkString(d.cpostalDes, false, field + ".cpostalDes");
    checkNumber(d.idPaises, false, field + ".idPaises");
    checkNull(d.idClientesNavigation, field + ".idClientesNavigation");
    if (d.idClientesNavigation === undefined) {
      d.idClientesNavigation = null;
    }
    checkNull(d.idEmpleadosNavigation, field + ".idEmpleadosNavigation");
    if (d.idEmpleadosNavigation === undefined) {
      d.idEmpleadosNavigation = null;
    }
    checkNull(d.idPaisesNavigation, field + ".idPaisesNavigation");
    if (d.idPaisesNavigation === undefined) {
      d.idPaisesNavigation = null;
    }
    checkNull(d.idTransportesNavigation, field + ".idTransportesNavigation");
    if (d.idTransportesNavigation === undefined) {
      d.idTransportesNavigation = null;
    }
    checkArray(d.detPeds, field + ".detPeds");
    if (d.detPeds) {
      for (let i = 0; i < d.detPeds.length; i++) {
        d.detPeds[i] = DetPedsEntityProxy.Create(d.detPeds[i], field + ".detPeds" + "[" + i + "]");
      }
    }
    if (d.detPeds === undefined) {
      d.detPeds = null;
    }
    return new PedidosEnityProxy(d);
  }
  private constructor(d: any) {
    this.id = d.id;
    this.idClientes = d.idClientes;
    this.idEmpleados = d.idEmpleados;
    this.fechaPed = d.fechaPed;
    this.fechaEntr = d.fechaEntr;
    this.fechaEnv = d.fechaEnv;
    this.idTransportes = d.idTransportes;
    this.cargo = d.cargo;
    this.destinatario = d.destinatario;
    this.dirDestinatario = d.dirDestinatario;
    this.ciudadDest = d.ciudadDest;
    this.regDestinatario = d.regDestinatario;
    this.cpostalDes = d.cpostalDes;
    this.idPaises = d.idPaises;
    this.idClientesNavigation = d.idClientesNavigation;
    this.idEmpleadosNavigation = d.idEmpleadosNavigation;
    this.idPaisesNavigation = d.idPaisesNavigation;
    this.idTransportesNavigation = d.idTransportesNavigation;
    this.detPeds = d.detPeds;
  }
}

export class DetPedsEntityProxy {
  public readonly id: number;
  public readonly idPedidos: number;
  public readonly idProductos: number;
  public readonly precioUnidad: number;
  public readonly cantidad: number;
  public readonly descuento: number;
  public readonly idProductosNavigation: null;
  public static Parse(d: string): DetPedsEntityProxy {
    return DetPedsEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): DetPedsEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.id, false, field + ".id");
    checkNumber(d.idPedidos, false, field + ".idPedidos");
    checkNumber(d.idProductos, false, field + ".idProductos");
    checkNumber(d.precioUnidad, false, field + ".precioUnidad");
    checkNumber(d.cantidad, false, field + ".cantidad");
    checkNumber(d.descuento, false, field + ".descuento");
    checkNull(d.idProductosNavigation, field + ".idProductosNavigation");
    if (d.idProductosNavigation === undefined) {
      d.idProductosNavigation = null;
    }
    return new DetPedsEntityProxy(d);
  }
  private constructor(d: any) {
    this.id = d.id;
    this.idPedidos = d.idPedidos;
    this.idProductos = d.idProductos;
    this.precioUnidad = d.precioUnidad;
    this.cantidad = d.cantidad;
    this.descuento = d.descuento;
    this.idProductosNavigation = d.idProductosNavigation;
  }
}

function throwNull2NonNull(field: string, d: any): never {
  return errorHelper(field, d, "non-nullable object", false);
}
function throwNotObject(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function throwIsArray(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function checkArray(d: any, field: string): void {
  if (!Array.isArray(d) && d !== null && d !== undefined) {
    errorHelper(field, d, "array", true);
  }
}
function checkNumber(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'number' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "number", nullable);
  }
}
function checkString(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'string' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "string", nullable);
  }
}
function checkNull(d: any, field: string): void {
  if (d !== null && d !== undefined) {
    errorHelper(field, d, "null or undefined", false);
  }
}
function errorHelper(field: string, d: any, type: string, nullable: boolean): never {
  if (nullable) {
    type += ", null, or undefined";
  }
  throw new TypeError('Expected ' + type + " at " + field + " but found:\n" + JSON.stringify(d) + "\n\nFull object:\n" + JSON.stringify(obj));
}
export interface PedidosEnity {
  id: number;
  idClientes: number;
  idEmpleados: number;
  fechaPed: string;
  fechaEntr: string;
  fechaEnv: string;
  idTransportes: number;
  cargo: number;
  destinatario: string;
  dirDestinatario: string;
  ciudadDest: string;
  regDestinatario: string;
  cpostalDes: string;
  idPaises: number;
  idClientesNavigation?: null;
  idEmpleadosNavigation?: null;
  idPaisesNavigation?: null;
  idTransportesNavigation?: null;
  detPeds?: (DetPedsEntity)[] | null;
}
export interface DetPedsEntity {
  id: number;
  idPedidos: number;
  idProductos: number;
  precioUnidad: number;
  cantidad: number;
  descuento: number;
  idProductosNavigation?: null;
}
export interface EmpleadosEntity {
  id: number;
  apellidos: string;
  nombre: string;
  cargo?: string | null;
  tratamiento?: string | null;
  fechaNac?: string | null;
  fechaContrat?: string | null;
  dire?: string | null;
  ciudad?: string | null;
  region?: string | null;
  cpostal?: string | null;
  pais?: string | null;
  telDomicilio?: string | null;
  exten?: string | null;
  notas?: string | null;
  jefe?: number | null;
  pedidos?: (null)[] | null;
}
export interface ClientesEntity {
  id: number;
  codigo: string;
  nombre: string;
  contacto: string;
  cargoCont: string;
  dire: string;
  ciudad: string;
  region?: string | null;
  cpostal: string;
  idPaises: number;
  te: string;
  fax?: string | null;
  idPaisesNavigation?: null;
  pedidos?: (null)[] | null;
}
export interface ProductosEntity {
  id: number;
  nombreProducto: string;
  idProveedores: number;
  idCategorías: number;
  cantidadPorUnidad: string;
  precioUnidad: number;
  unidadesEnExistencia: number;
  unidadesEnPedido: number;
  nivelNuevoPedido: number;
  suspendido: boolean;
  idCategoríasNavigation?: null;
  idProveedoresNavigation?: null;
  detPeds?: (null)[] | null;
}

