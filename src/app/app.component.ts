import { Component, OnInit, ElementRef } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {
  PedidosEnity,
  EmpleadosEntity,
  ClientesEntity,
  DetPedsEntity,
  ProductosEntity,
} from "./pachacamac.interface";
import { catchError, map } from "rxjs/operators";
import { empty, interval } from "rxjs";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from "@angular/forms";
declare var $: any;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public _pedidos: PedidosEnity[];
  public _currentPedido: PedidosEnity;
  public _empleados: EmpleadosEntity[];
  public _clientes: ClientesEntity[];
  public _fechapedido = Date.now();
  public _productos: ProductosEntity[];
  public _detpedidosnew: DetPedsEntity[] = [];
  //**FORM Empresa */
  public formlocal: FormGroup;
  public formDetp: FormGroup;
  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private elementRef: ElementRef
  ) {}
  ngOnInit(): void {
    interval(1000).subscribe((x) => (this._fechapedido = Date.now()));
    this.createFormLocal();
    this.creteFormDetPe()
    //Get Pedigos
    this.httpClient
      .get<PedidosEnity[]>("https://localhost:5001/api/pachacamac")
      .pipe(catchError(() => empty()))
      .subscribe((d) => {
        this._pedidos = d;
      });
    this.httpClient
      .get<EmpleadosEntity[]>("https://localhost:5001/api/pachacamac/empleados")
      .pipe(catchError(() => empty()))
      .subscribe((d) => {
        this._empleados = d;
      });
    this.httpClient
      .get<ClientesEntity[]>("https://localhost:5001/api/pachacamac/clientes")
      .pipe(catchError(() => empty()))
      .subscribe((d) => {
        this._clientes = d;
      });
    this.httpClient
      .get<ProductosEntity[]>("https://localhost:5001/api/pachacamac/pruductos")
      .pipe(catchError(() => empty()))
      .subscribe((d) => {
        this._productos = d;
      });
    //Get Empleados
    //Get Clientes
  }
  newdetalle(){
    this._detpedidosnew.length=2
  }
  showoption(p: PedidosEnity) {
    this._currentPedido = p;
  }
  nuevopedido() {
    $("#exampleModalCenter").modal("show");
  }
  onSumbit() {
    for (const key of Object.keys(this.formlocal.controls)) {
      this.formlocal.markAllAsTouched();
      if (this.formlocal.controls[key].invalid) {
        const invalidControl = this.elementRef.nativeElement.querySelector(
          '[formcontrolname="' + key + '"]'
        );
        invalidControl.focus();
        break;
      }
    }
  }
  changeSuit($event) {
    this.formlocal.get("name").setValue($.target.value, {
      onlySelf: true,
    });
  }
  createFormLocal() {
    this.formlocal = this.formBuilder.group({
      local_nombre: [
        "",
        Validators.required,
        // ValidateNombreNoRepetido.createValidador(
        //   this.getDataDashService,
        //   this.empresa.empresa_id
        // ),
      ],
      local_descripcion: [""],
      empleados: ["", [Validators.required]],
      clientes: ["", Validators.required],
    });
  }
  get f() {
    return this.formlocal.controls;
  }
  creteFormDetPe() {
    this.formDetp = this.formBuilder.group({
      id: ["", Validators.required],
      precio: ["0", Validators.required],
      cantidad: ["0", Validators.required],
      descuento: ["0"],
    });
  }
  borrardetalle(det:DetPedsEntity){
    this._detpedidosnew.filter((a)=>{
      return a.id!=det.id
    })
  }
}
// export class ValidateNombreNoRepetido {
//   static createValidador(getDataDashService: GetdataDashService, id: number) {
//     return (control: AbstractControl) => {
//       return getDataDashService.getEmpresa1(id).pipe(
//         map((data) => {
//           let a = [];
//           if (data["status"] == "OK") {
//             a = data["cuerpo"]["local"];
//           }
//           let v = a.filter(function (e) {
//             return (
//               String(e["local_nombre"]).toLocaleLowerCase() ==
//               String(control.value).toLocaleLowerCase()
//             );
//           });
//           data = !v.length;
//           console.log(data);
//           return data ? null : { nombrerepetido: true };
//         })
//       );
//     };
//   }
// }
