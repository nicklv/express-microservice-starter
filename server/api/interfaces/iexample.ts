import { Request, Response } from 'express';
import * as Promise from 'bluebird';
import { Observable } from 'rxjs';
import { Example } from '../models/example.model';

interface IExample {

  all(): Promise<Example[]>;

  byId(id: number): Promise<Example>;

  byPostsByID(id: number): Observable<any>;

  create(name: string): Promise<Example>;

  sampleAPI(): Observable<Example[]>;
}

export default IExample;
