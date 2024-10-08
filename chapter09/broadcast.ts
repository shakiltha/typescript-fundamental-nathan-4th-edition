import { filter, map, Observable, Subject, Subscription } from "rxjs";

enum EventKeys {
  ALL = "all-events",
  SINGLE = "single-event",
}

export interface IBroadcastEvent {
  key: EventKeys;
  data: string;
}

export class BroadcastService {
  private _eventBus = new Subject<IBroadcastEvent>();

  on(key: EventKeys): Observable<string> {
    return this._eventBus.asObservable().pipe(
      filter((event) => event.key === key || event.key === EventKeys.ALL),
      map((event) => event.data)
    );
  }
  broadcast(key: EventKeys, data: string) {
    this._eventBus.next({ key, data });
  }
}

class Listener {
  private eventSubscription: Subscription;
  constructor(
    broadCastService: BroadcastService,
    eventKey: EventKeys,
    private listenerName: string
  ) {
    this.eventSubscription = broadCastService
      .on(eventKey)
      .subscribe(this.reactToEvent.bind(this));
  }
  private reactToEvent(event: string) {
    console.log(`Listener [${this.listenerName}]
            received event : ${event}`);
  }
  public unregister() {
    this.eventSubscription.unsubscribe();
  }
}

const broadCastService = new BroadcastService();

const listenOne = new Listener(broadCastService, EventKeys.ALL, "first");
const listenTwo = new Listener(broadCastService, EventKeys.SINGLE, "second");

broadCastService.broadcast(EventKeys.ALL, "All event broadcast");
broadCastService.broadcast(EventKeys.SINGLE, "SINGLE event broadcast");
broadCastService.broadcast(EventKeys.ALL, "Another All event broadcast");

listenOne.unregister();
broadCastService.broadcast(EventKeys.ALL, "final ALL event broadcast");
