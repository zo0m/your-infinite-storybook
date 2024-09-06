import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import {
    distinctUntilChanged,
    map,
    pluck,
    switchMap,
    tap
} from 'rxjs/operators';

export interface NodeState {
    id: string;
    selected?: boolean;
    expanded?: boolean;
    opened?: boolean;
    loading?: boolean;
    current?: boolean;
}

export interface NodesState {
    [id: string]: NodeState;
}

@Injectable()
export class UserTreeStateService {
    private readonly _nodes = new BehaviorSubject<NodesState>({});
    public readonly nodes$ = this._nodes.asObservable();

    get nodes(): NodesState {
        return this._nodes.getValue();
    }

    set nodes(val: NodesState) {
        this._nodes.next(val || {});
    }

    public selectNodeState(id: string): Observable<NodeState> {
        return this.nodes$.pipe(pluck(id));
    }

    public getNodeState(id: string): NodeState {
        this.nodes[id] = this.nodes[id] || { id };
        return this.nodes[id];
    }

    public setNodeState(ids: string[], field: string, value: boolean) {
        const updatedNodes = _.reduce(
            ids,
            (nodes, id) => {
                nodes[id] = {
                    id,
                    ...this.nodes[id],
                    [field]: value
                };

                return nodes;
            },
            {}
        );

        this.nodes = {
            ...this.nodes,
            ...updatedNodes
        };
    }

    public selectNode(selected: boolean, ...ids: string[]) {
        this.setNodeState(ids, 'selected', selected);
    }

    public expandNode(expanded: boolean, ...ids: string[]) {
        this.setNodeState(ids, 'expanded', expanded);
    }

    public openNode(opened: boolean, ...ids: string[]) {
        this.setNodeState(ids, 'opened', opened);
    }

    public loadingNode(loading: boolean, ...ids: string[]) {
        this.setNodeState(ids, 'loading', loading);
    }

    public currentNode(current: boolean, id) {
        if (current) {
            const prevId = _.findKey(this.nodes, 'current');
            this.setNodeState([prevId], 'current', !current);
        }
        this.setNodeState([id], 'current', current);
    }
}
