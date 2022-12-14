import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingListRoutingModule } from "./shopping-list-routing.module"
import { SharedModule } from "../shared/shared.module";
import { LoggingService } from "../logging.service";

@NgModule({
    declarations: [
        ShoppingEditComponent,
        ShoppingListComponent,
    ],
    imports: [
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        ShoppingListRoutingModule,
        SharedModule
    ],
    // providers: [LoggingService]
})
export class ShoppingListModule {

}