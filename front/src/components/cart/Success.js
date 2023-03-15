import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";

export const Success = () => {
  return (
    <Fragment>
      <MetaData title={"Order Success"} />

      <div className="row justify-content-center">
        <div className="col-6 mt-5 text-center">
          <img
            className="my-5 img-fluid d-block mx-auto"
            src="/images/orderOk.png"
            alt="Exito!"
            width="200"
            height="200"
          />

          <h2>
            Su orden ha sido registrada con éxito, pronto estaremos en contacto
          </h2>

          <Link to="/">Volver al inicio</Link>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <hr />
      
      <h2 class="titulo-principal2">Contáctanos</h2>

      <div>
        <main>
          <form>
            <label for="nombreApellido">Nombre y Apellido</label>
            <input
              type="text"
              id="nombreApellido"
              class="inputPadron"
              required
            ></input>

            <label for="correoElectronico">Correo Electrónico</label>
            <input
              type="text"
              id="correoElectronico"
              class="inputPadron"
              required
              placeholder="email@dominio.com"
            ></input>

            <label for="telefono">Teléfono</label>
            <input
              type="text"
              id="telefono"
              class="inputPadron"
              required
              placeholder="(XXX) XXX XXXX"
            ></input>

            <label for="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              cols="70"
              rows="10"
              class="inputPadron"
              required
            ></textarea>

            <fieldset>
              <legend>¿Cómo le gustaría que lo contactemos?</legend>

              <label for="radioEmail">
                <input
                  type="radio"
                  name="contacto"
                  value="emial"
                  id="radioEmail"
                ></input>
                Email
              </label>

              <label for="radioTelefono">
                <input
                  type="radio"
                  name="contacto"
                  value="telefono"
                  id="radioTelefono"
                ></input>
                Teléfono
              </label>

              <label for="radioWhatsapp">
                <input
                  type="radio"
                  name="contacto"
                  value="whatsapp"
                  id="radioWhatsapp"
                  checked
                ></input>
                Whatsapp
              </label>
            </fieldset>

            <fieldset>
              <legend>¿Cómo fue su experiencia de compra en la página?</legend>
              <select>
                <option>Excelente</option>
                <option>Buena</option>
                <option>Regular</option>
                <option>Deficiente</option>
              </select>
            </fieldset>

            <label class="checkbox">
              <input type="checkbox" checked></input>Le gustaría recibir
              novedades de ConverTic Shop
            </label>

            <input
              type="submit"
              value="Enviar formulario"
              class="enviar"
            ></input>
          </form>

          <p class="horario">Horario de nuestras tiendas físicas</p>
          <table>
            <thead>
              <tr>
                <th>Día</th>
                <th>Horario</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Lunes a viernes</td>
                <td> 8 am - 8 pm</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    </Fragment>
  );
};
