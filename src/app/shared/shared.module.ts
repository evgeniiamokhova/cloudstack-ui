import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlPopoverModule } from '@angular2-mdl-ext/popover';
import { MdlSelectModule } from '@angular2-mdl-ext/select';
import { MdlModule } from 'angular2-mdl';
import { TranslateModule } from 'ng2-translate';

import { DivByPowerOfTwoPipe } from './pipes/div-by-power-of-two.pipe';
import { ViewValuePipe } from './pipes/view-value.pipe';
import {
  AffinityGroupService,
  AsyncJobService,
  AuthGuard,
  AuthService,
  ConfigService,
  DiskOfferingService,
  DiskStorageService,
  ErrorService,
  JobsNotificationService,
  LoginGuard,
  NotificationService,
  OsTypeService,
  ResourceLimitService,
  ResourceUsageService,
  SecurityGroupService,
  ServiceOfferingFilterService,
  ServiceOfferingService,
  SnapshotService,
  SSHKeyPairService,
  StatsUpdateService,
  StorageService,
  TagService,
  UtilsService,
  VolumeService,
  ZoneService
} from './services';

import { SgRulesManagerComponent } from './components/sg-rules-manager.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NotificationBoxComponent } from './components/notification-box/notification-box.component';
import { NotificationBoxItemComponent } from './components/notification-box/notification-box-item.component';
import { HighLightPipe } from './pipes/highlight.pipe';
import { VmStatisticsComponent } from './components/vm-statistics/vm-statistics.component';
import { DiskOfferingComponent } from './components/disk-offering/disk-offering.component';
import { VolumeSizeControlComponent } from './components/volume-size-control/volume-size-control.component';
import { FormsModule } from '@angular/forms';
import { FabComponent } from './components/fab/fab.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { InstanceGroupService } from './services/instance-group.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    MdlModule,
    MdlPopoverModule,
    MdlSelectModule
  ],
  exports: [
    ColorPickerComponent,
    DiskOfferingComponent,
    FabComponent,
    NotificationBoxComponent,
    NotificationBoxItemComponent,
    SgRulesManagerComponent,
    SidebarComponent,
    VmStatisticsComponent,
    VolumeSizeControlComponent,
    DivByPowerOfTwoPipe,
    HighLightPipe,
    ViewValuePipe
  ],
  declarations: [
    ColorPickerComponent,
    DiskOfferingComponent,
    FabComponent,
    NotificationBoxComponent,
    NotificationBoxItemComponent,
    SgRulesManagerComponent,
    SidebarComponent,
    VmStatisticsComponent,
    VolumeSizeControlComponent,
    DivByPowerOfTwoPipe,
    HighLightPipe,
    ViewValuePipe,
  ],
  providers: [
    AffinityGroupService,
    AsyncJobService,
    AuthGuard,
    AuthService,
    ConfigService,
    DiskOfferingService,
    DiskStorageService,
    ErrorService,
    InstanceGroupService,
    JobsNotificationService,
    LoginGuard,
    NotificationService,
    OsTypeService,
    ResourceLimitService,
    ResourceUsageService,
    SSHKeyPairService,
    SecurityGroupService,
    ServiceOfferingFilterService,
    ServiceOfferingService,
    SnapshotService,
    StatsUpdateService,
    StorageService,
    TagService,
    UtilsService,
    VolumeService,
    ZoneService,
    { provide: 'INotificationService', useClass: NotificationService },
    { provide: 'IStorageService', useClass: StorageService },
  ]
})
export class SharedModule { }
