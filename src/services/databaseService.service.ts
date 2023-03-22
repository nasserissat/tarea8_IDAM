import { Injectable } from "@angular/core";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";
import { BehaviorSubject } from "rxjs";
import { vivencia } from "../models/vivencia.model";
@Injectable({
    providedIn: 'root'
  })
  export class DatabaseService {
  
    private database!: SQLiteObject;
    private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  
    constructor(private sqlite: SQLite) {
      this.sqlite.create({
        name: 'vivencias.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
        this.database = db;
        this.createTables();
        this.dbReady.next(true);
      });
    }
  
    private createTables(): void {
      this.database.executeSql(`
        CREATE TABLE IF NOT EXISTS vivencias (
          id INTEGER PRIMARY KEY,
          title TEXT,
          fecha TEXT,
          descripcion TEXT,
          foto TEXT,
          audio TEXT
        )
      `, [])
      .then(() => console.log('Tabla creada'))
      .catch((error) => console.error('Error al crear tabla', error));
    }
  
    public getDatabaseState(): BehaviorSubject<boolean> {
      return this.dbReady;
    }
    public addVivencia(vivencia: vivencia): Promise<any> {
        const sql = `
          INSERT INTO vivencias (title, fecha, descripcion, foto, audio)
          VALUES (?, ?, ?, ?, ?)
        `;
        const data = [
          vivencia.titulo,
          vivencia.fecha,
          vivencia.descripcion,
          vivencia.foto,
          vivencia.audio || null
        ];
      
        return this.database.executeSql(sql, data)
          .then((res) => {
            console.log('Vivencia agregada');
          })
          .catch((error) => {
            console.error('Error al agregar vivencia', error);
          });
      }
  }