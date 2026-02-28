/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { MarkCodHistoryAsDoneCommand } from '../models/mark-cod-history-as-done-command';
import { CreateCODPicDocItemCommand } from '../models/create-codpic-doc-item-command';
import { CreateCODPicDocItemsCommand } from '../models/create-codpic-doc-items-command';
import { UpdateCODPicDocItemCommand } from '../models/update-codpic-doc-item-command';
import { GetCODPicDocItemModel } from '../models/get-codpic-doc-item-model';
import { ChangeDescriptionCommand } from '../models/change-description-command';
import { CreateCaseOfDamageOfferCommand } from '../models/create-case-of-damage-offer-command';
import { CreateCODSettlementInvoiceCommand } from '../models/create-codsettlement-invoice-command';
import { ConvertCODManualInvoiceToFinalSettlementRequest } from '../models/convert-codmanual-invoice-to-final-settlement-request';
import { CreateCaseOfDamageInvoiceCommand } from '../models/create-case-of-damage-invoice-command';
import { CreateCODPrePaymentInvoiceCommand } from '../models/create-codpre-payment-invoice-command';
import { CreateFileAttachmentCommand } from '../models/create-file-attachment-command';
import { UpdateFileAttachmentCommand } from '../models/update-file-attachment-command';
import { CreateResourceBookingsCommand } from '../models/create-resource-bookings-command';
import { UpdateResourceBookingsCommand } from '../models/update-resource-bookings-command';
import { UpdateMeasurementSpotCommand } from '../models/update-measurement-spot-command';
import { GetMeasurementSpotModel } from '../models/get-measurement-spot-model';
import { UpdateMeasurementLocationCommand } from '../models/update-measurement-location-command';
import { GetMeasurementLocationModel } from '../models/get-measurement-location-model';
import { UpdateMeasurementMeterCommand } from '../models/update-measurement-meter-command';
import { GetMeasurementMeterModel } from '../models/get-measurement-meter-model';
import { UpdateMeasurementTaskCommand } from '../models/update-measurement-task-command';
import { GetMeasurementTaskModel } from '../models/get-measurement-task-model';
import { UpdateMeasurementProtocolCommand } from '../models/update-measurement-protocol-command';
import { GetMeasurementProtocolModel } from '../models/get-measurement-protocol-model';
import { CreateMeasurementSpotCommand } from '../models/create-measurement-spot-command';
import { LoadMeasurementSpotsModel } from '../models/load-measurement-spots-model';
import { CreateMeasurementMeterCommand } from '../models/create-measurement-meter-command';
import { LoadMeasurementMeterModel } from '../models/load-measurement-meter-model';
import { CreateMeasurementLocationCommand } from '../models/create-measurement-location-command';
import { CreateMeasurementTaskCommand } from '../models/create-measurement-task-command';
import { CreateMeasurementProtocolCommand } from '../models/create-measurement-protocol-command';
import { CreateMeasurementEntryPictureCommand } from '../models/create-measurement-entry-picture-command';
import { CreateMeasurementEntryCommand } from '../models/create-measurement-entry-command';
import { ChangeMeasureCommand } from '../models/change-measure-command';
import { UpdateMeasurementEntryCommand } from '../models/update-measurement-entry-command';
import { UpdateMeasurementEntryPictureCommand } from '../models/update-measurement-entry-picture-command';
import { CreateLeakageLocationProtocolCommand } from '../models/create-leakage-location-protocol-command';
import { UpdateLeakageLocationProtocolCommand } from '../models/update-leakage-location-protocol-command';
import { UpdateLeakageLocationProtocolSignatureCommand } from '../models/update-leakage-location-protocol-signature-command';
import { UpdateLeakageLocationProtocolLocatorSignatureCommand } from '../models/update-leakage-location-protocol-locator-signature-command';
import { ProcurementCostItemModel } from '../models/procurement-cost-item-model';
import { ProcurementCostItemsModel } from '../models/procurement-cost-items-model';
import { GetCODPriceListGroupsModel } from '../models/get-codprice-list-groups-model';
import { AddCaseOfDamageMeasureItemCommand } from '../models/add-case-of-damage-measure-item-command';
import { UpdateCaseOfDamageMeasureItemCommand } from '../models/update-case-of-damage-measure-item-command';
import { ChangeCalculationItemMeasureItemPositionCommand } from '../models/change-calculation-item-measure-item-position-command';
import { CreateCODItemsCommand } from '../models/create-coditems-command';
import { CloneCODInvoiceCommand } from '../models/clone-codinvoice-command';
import { ChangeIsOutsideCountyCommand } from '../models/change-is-outside-county-command';
import { ChangekindOfDamageFloodingCommand } from '../models/changekind-of-damage-flooding-command';
import { CreatePowerConsumptionCardCommand } from '../models/create-power-consumption-card-command';
import { UpdatePowerConsumptionCardCommand } from '../models/update-power-consumption-card-command';
import { ChangeProjectProfileCommand } from '../models/change-project-profile-command';
import { MigrateDummyProjectsCommand } from '../models/migrate-dummy-projects-command';
import { CreateSBBriefPdfCommand } from '../models/create-sbbrief-pdf-command';
import { SendSBBriefPdfCommand } from '../models/send-sbbrief-pdf-command';
import { SendEmailCommand } from '../models/send-email-command';
import { CloneCodCommand } from '../models/clone-cod-command';
import { UpdateCODGeoDataByStatusCommand } from '../models/update-codgeo-data-by-status-command';
import { AssignConstructionEngineerToCODCommand } from '../models/assign-construction-engineer-to-codcommand';
import { SendContractCommand } from '../models/send-contract-command';
import { UpdateCustomerReachedCommand } from '../models/update-customer-reached-command';
import { CreateCodCommentCommand } from '../models/create-cod-comment-command';
import { UpdateCodCommentCommand } from '../models/update-cod-comment-command';
import { GetCodByTechnicianModel } from '../models/get-cod-by-technician-model';
import { GetCodHistoriesReportModel } from '../models/get-cod-histories-report-model';
import { GetLeakageLocationProtocolListModel } from '../models/get-leakage-location-protocol-list-model';
import { GetContactPersonsByCodListModel } from '../models/get-contact-persons-by-cod-list-model';
import { CreateCODCommand } from '../models/create-codcommand';
import { GetCODModel } from '../models/get-codmodel';
import { UpdateCODCommand } from '../models/update-codcommand';
import { GetContactPersonModel } from '../models/get-contact-person-model';
import { UpdateContactPersonCommand } from '../models/update-contact-person-command';
import { GetCODHistoryModel } from '../models/get-codhistory-model';
import { SearchAddressModel } from '../models/search-address-model';
import { SearchMeasurementLocationModel } from '../models/search-measurement-location-model';
import { GetMeasurementSpotsByLocationModel } from '../models/get-measurement-spots-by-location-model';
import { SearchBoilerplateModel } from '../models/search-boilerplate-model';
import { SearchCaseOfDamageModel } from '../models/search-case-of-damage-model';
import { SearchArticleByCodModel } from '../models/search-article-by-cod-model';
import { GetWizardCalculationArticlesModel } from '../models/get-wizard-calculation-articles-model';
import { SearchArticleCategoryModel } from '../models/search-article-category-model';
import { SearchUnitModel } from '../models/search-unit-model';
import { GetCODItemsModel } from '../models/get-coditems-model';
import { GetCODReceiptItemSettingsModel } from '../models/get-codreceipt-item-settings-model';
import { GetFileAttachementModel } from '../models/get-file-attachement-model';
import { GetMaxPosPicDocItemModel } from '../models/get-max-pos-pic-doc-item-model';
import { GetResourceBookingModel } from '../models/get-resource-booking-model';
import { GetLeakDetectionResourceBookingModel } from '../models/get-leak-detection-resource-booking-model';
import { LoadSpotsWithoutEntriesModel } from '../models/load-spots-without-entries-model';
import { GetScmMessagesModel } from '../models/get-scm-messages-model';
import { SendInvoiceFromCODCommand } from '../models/send-invoice-from-codcommand';
import { GetBlobReferencingObjectsModel } from '../models/get-blob-referencing-objects-model';
import { GetMeasurementProtocolsByCodModel } from '../models/get-measurement-protocols-by-cod-model';
import { GetLeakageProtocolModel } from '../models/get-leakage-protocol-model';
import { GetLeakageEquipementsModel } from '../models/get-leakage-equipements-model';
import { GetCaseOfDamageMeasureItemsModel } from '../models/get-case-of-damage-measure-items-model';
import { GetCODPowerConsumptionCardModel } from '../models/get-codpower-consumption-card-model';
import { SearchCODsModel } from '../models/search-cods-model';
import { SearchOpenCODsModel } from '../models/search-open-cods-model';
import { GetCodHistoriesByCodModel } from '../models/get-cod-histories-by-cod-model';
import { GetMeasurementLocationsByCodIdModel } from '../models/get-measurement-locations-by-cod-id-model';
import { GetMeasurementMetersByLocationIdModel } from '../models/get-measurement-meters-by-location-id-model';
import { GetCaseOfDamageCommentsResult } from '../models/get-case-of-damage-comments-result';
import { UpdateCODStatusCommand } from '../models/update-codstatus-command';
import { CreateContactPersonCommand } from '../models/create-contact-person-command';
import { CreateCODItemCommand } from '../models/create-coditem-command';
import { SaveCODReceiptItemSettingsCommand } from '../models/save-codreceipt-item-settings-command';
import { CreateCODHistoryCommand } from '../models/create-codhistory-command';
import { UpdateCODHistoryCommand } from '../models/update-codhistory-command';
@Injectable({
  providedIn: 'root',
})
class CODService extends __BaseService {
  static readonly DeleteCodCommentPath = '/v0/api/COD/comment/{id}';
  static readonly MarkCodHistoryAsDonePath = '/v0/api/COD/{caseOfDamageId}/{id}/MarkCodHistoryAsDone';
  static readonly CreateCODPicDocItemPath = '/v0/api/COD/CODPicDocItem';
  static readonly CreatePicDocItemsPath = '/v0/api/COD/CODPicDocItems';
  static readonly UpdateCODPicDocItemPath = '/v0/api/COD/{id}/Documentation';
  static readonly DeleteCODPicDocItemPath = '/v0/api/COD/{id}/Documentation';
  static readonly GetCODPicDocItemPath = '/v0/api/COD/{id}/Documentation';
  static readonly ChangeArticleCategoryPath = '/v0/api/COD/{codId}/items/{codItemId}/ChangeArticleCategory';
  static readonly ChangeArticlePath = '/v0/api/COD/{codId}/items/{codItemId}/ChangeArticle';
  static readonly ChangeUnitPath = '/v0/api/COD/{codId}/items/{codItemId}/ChangeUnit';
  static readonly ChangeQuantityPath = '/v0/api/COD/{codId}/items/{codItemId}/ChangeQuantity';
  static readonly ChangeDescriptionPath = '/v0/api/COD/{codId}/items/{codItemId}/ChangeDescription';
  static readonly CreateCaseOfDamageOfferPath = '/v0/api/COD/{codId}/CreateCaseOfDamageOffer';
  static readonly CreateCODSettlementInvoicePath = '/v0/api/COD/CreateCODSettlementInvoice';
  static readonly ConvertCODManualInvoiceToFinalSettlementPath = '/v0/api/COD/ConvertCODManualInvoiceToFinalSettlement';
  static readonly CreateCaseOfDamageInvoicePath = '/v0/api/COD/CreateCaseOfDamageInvoice';
  static readonly CreateCODPrePaymentInvoicePath = '/v0/api/COD/CreateCODPrePaymentInvoice';
  static readonly ChangeItemPricePath = '/v0/api/COD/{codId}/items/{codItemId}/ChangeItemPrice';
  static readonly ChangeTotalCalculationPricePath = '/v0/api/COD/{codId}/items/{codItemId}/ChangeTotalCalculationPrice';
  static readonly ChangeItemAcquisitionCostsPath = '/v0/api/COD/{codId}/items/{codItemId}/ChangeItemAcquisitionCosts';
  static readonly CreateFileAttachmentPath = '/v0/api/COD/{codId}/FileAttachment';
  static readonly UpdateFileAttachmentPath = '/v0/api/COD/{id}/FileAttachment';
  static readonly DeleteFileAttachmentPath = '/v0/api/COD/{id}/FileAttachment';
  static readonly CreateResourceBookingsPath = '/v0/api/COD/CreateResourceBooking';
  static readonly DeleteResourceBookingsPath = '/v0/api/COD/{id}/ResourceBooking';
  static readonly UpdateResourceBookingsPath = '/v0/api/COD/{id}/ResourceBooking';
  static readonly UpdateMeasurementSpotPath = '/v0/api/COD/{id}/MeasurementSpot';
  static readonly DeleteMeasurementSpotPath = '/v0/api/COD/{id}/MeasurementSpot';
  static readonly GetMeasurementSpotPath = '/v0/api/COD/{id}/MeasurementSpot';
  static readonly UpdateMeasurementLocationPath = '/v0/api/COD/{id}/MeasurementLocation';
  static readonly DeleteMeasurementLocationPath = '/v0/api/COD/{id}/MeasurementLocation';
  static readonly GetMeasurementLocationPath = '/v0/api/COD/{id}/MeasurementLocation';
  static readonly UpdateMeasurementMeterPath = '/v0/api/COD/{id}/MeasurementMeter';
  static readonly DeleteMeasurementMeterPath = '/v0/api/COD/{id}/MeasurementMeter';
  static readonly GetMeasurementMeterPath = '/v0/api/COD/{id}/MeasurementMeter';
  static readonly UpdateMeasurementTaskPath = '/v0/api/COD/{id}/MeasurementTask';
  static readonly DeleteMeasurementTaskPath = '/v0/api/COD/{id}/MeasurementTask';
  static readonly GetMeasurementTaskPath = '/v0/api/COD/{id}/MeasurementTask';
  static readonly UpdateMeasurementProtocolPath = '/v0/api/COD/{id}/MeasurementProtocol';
  static readonly GetMeasurementProtocolPath = '/v0/api/COD/{id}/MeasurementProtocol';
  static readonly CreateMeasurementSpotPath = '/v0/api/COD/MeasurementSpot';
  static readonly LoadMeasurementSpotsPath = '/v0/api/COD/MeasurementSpot';
  static readonly CreateMeasurementMeterPath = '/v0/api/COD/MeasurementMeter';
  static readonly LoadMeasurementMeterPath = '/v0/api/COD/MeasurementMeter';
  static readonly CreateMeasurementLocationPath = '/v0/api/COD/MeasurementLocation';
  static readonly CreateMeasurementTaskPath = '/v0/api/COD/MeasurementTask';
  static readonly CreateMeasurementProtocolPath = '/v0/api/COD/MeasurementProtocol';
  static readonly CreateMeasurementEntryPicturePath = '/v0/api/COD/{MeasurementEntryId}/MeasurementEntryPicture';
  static readonly CreateMeasurementEntryPath = '/v0/api/COD/{MeasurementSpotId}/{MeasurementWorkingOrderId}/MeasurementEntry';
  static readonly ChangeMeasurePath = '/v0/api/COD/{codId}/ChangeMeasure';
  static readonly UpdateMeasurementEntryPath = '/v0/api/COD/{MeasurementEntryId}/MeasurementEntry';
  static readonly UpdateMeasurementEntryPicturePath = '/v0/api/COD/{MeasurementEntryPictureId}/MeasurementEntryPicture';
  static readonly CreateLeakageLocationProtocolPath = '/v0/api/COD/{id}/leakageLocationProtocol';
  static readonly UpdateLeakageLocationProtocolPath = '/v0/api/COD/{llid}/leakageLocation';
  static readonly UpdateLeakageLocationProtocolSignaturePath = '/v0/api/COD/{llid}/leakageLocationSignature';
  static readonly UpdateLeakageLocationProtocolLocatorSignaturePath = '/v0/api/COD/{id}/LeakageLocationProtocolLocatorSignature';
  static readonly DeleteLeakageLocationProtocolPath = '/v0/api/COD/{caseOfDamageId}/{id}/DeleteLeakageLocationProtocol';
  static readonly MoveLOReportToAnotherCODPath = '/v0/api/COD/{caseOfDamageId}/{id}/MoveLOReportToAnotherCOD';
  static readonly CreateProcurementCostItemPath = '/v0/api/COD/{caseOfDamageId}/ProcurementCostItems';
  static readonly GetCODProcurementCostItemsPath = '/v0/api/COD/{caseOfDamageId}/ProcurementCostItems';
  static readonly UpdateProcurementCostItemPath = '/v0/api/COD/{caseOfDamageId}/ProcurementCostItems/{procurementCostItemId}';
  static readonly DeleteProcurementCostItemPath = '/v0/api/COD/{caseOfDamageId}/ProcurementCostItems/{procurementCostItemId}';
  static readonly GetCODPriceListGroupsPath = '/v0/api/COD/{id}/PriceListGroups';
  static readonly AddCaseOfDamageMeasureItemPath = '/v0/api/COD/{caseOfDamageId}/AddCaseOfDamageMeasureItem';
  static readonly UpdateCaseOfDamageMeasureItemPath = '/v0/api/COD/{caseOfDamageId}/UpdateCaseOfDamageMeasureItem';
  static readonly DeleteCaseOfDamageMeasureItemPath = '/v0/api/COD/{caseOfDamageId}/DeleteCaseOfDamageMeasureItem/{caseOfDamageMeasureItemId}';
  static readonly AssignMeasureItemToCalculationItemPath = '/v0/api/COD/{caseOfDamageId}/items/{CalculationItemId}/{MeasureItemID}/{Position}';
  static readonly DeleteCalculationItemMeasureItemPath = '/v0/api/COD/{caseOfDamageId}/DeleteCalculationItemMeasureItem/{calculationItemMeasureItemId}';
  static readonly ChangeCalculationItemMeasureItemPositionPath = '/v0/api/COD/{caseOfDamageId}/ChangeCalculationItemMeasureItemPosition/{ItemID}';
  static readonly CreateCODCalcItemsPath = '/v0/api/COD/{codId}/CODCalcItems';
  static readonly CloneCODInvoicePath = '/v0/api/COD/CloneCODInvoice';
  static readonly SynchronizeCODMeasureItemsPath = '/v0/api/COD/{id}/SynchronizeCODMeasureItems';
  static readonly ChangeIsOutsideCountyPath = '/v0/api/COD/{codId}/IsOutsideCounty';
  static readonly ChangekindOfDamageFloodingPath = '/v0/api/COD/{codId}/IskindOfDamageFlooding';
  static readonly CreatePowerConsumptionCardPath = '/v0/api/COD/{id}/PowerConsumptionCard';
  static readonly UpdatePowerConsumptionCardPath = '/v0/api/COD/{id}/PowerConsumptionCard';
  static readonly DeletePowerConsumptionCardPath = '/v0/api/COD/{id}/PowerConsumptionCard/{pccId}';
  static readonly ChangeSendDamageDocPath = '/v0/api/COD/{codId}/ChangeSendDamageDoc';
  static readonly ChangeSendLODocPath = '/v0/api/COD/{codId}/ChangeSendLODoc';
  static readonly ChangeProjectProfilePath = '/v0/api/COD/{codId}/ChangeProjectProfile';
  static readonly CreateLeakageLocationPdfPath = '/v0/api/COD/{Id}/CreateLeakageLocationPdf';
  static readonly MigrateDummyProjectsPath = '/v0/api/COD/MigrateDummyProjects';
  static readonly ChangeCODCustomerPriceDecisivePath = '/v0/api/COD/{id}/CODCustomerPriceDecisive/{customerIdPriceDecisive}';
  static readonly ChangeCODDateOfAcceptancePath = '/v0/api/COD/{id}/CODDateOfAcceptance/{dateOfAcceptance}';
  static readonly CreateSBBriefPdfPath = '/v0/api/COD/{Id}/CreateSBBriefPdf';
  static readonly SendSBBriefPdfPath = '/v0/api/COD/{Id}/SendSBBriefPdf';
  static readonly SendEmailPath = '/v0/api/COD/{codId}/email';
  static readonly SplitCodPath = '/v0/api/COD/SplitCod';
  static readonly UpdateCODGeoDataByStatusPath = '/v0/api/COD/GeoData';
  static readonly AssignConstructionEngineerToCODPath = '/v0/api/COD/{Id}/AssignConstructionEngineer';
  static readonly SendContractPath = '/v0/api/COD/{Id}/SendContract';
  static readonly UpdateCustomerReachedPath = '/v0/api/COD/CustomerReached/{id}';
  static readonly CreateCaseOfDamageCommentPath = '/v0/api/COD/CreateCaseOfDamageComment';
  static readonly UpdateCaseOfDamageCommentPath = '/v0/api/COD/UpdateCaseOfDamageComment';
  static readonly GetCodByTechnicianPath = '/v0/api/COD/GetCodByTechnician';
  static readonly GetCodHistoriesReportPath = '/v0/api/COD/cod/histories';
  static readonly GetLeakageLocationProtocolListPath = '/v0/api/COD/LeakageLocationProtocolList';
  static readonly GetContactPersonsByCodListPath = '/v0/api/COD/ContactPersonsByCodList';
  static readonly CreateCODPath = '/v0/api/COD';
  static readonly GetCODPath = '/v0/api/COD/{id}';
  static readonly UpdateCODPath = '/v0/api/COD/{id}';
  static readonly DeleteCODPath = '/v0/api/COD/{id}';
  static readonly GetContactPersonPath = '/v0/api/COD/{id}/ContactPerson';
  static readonly UpdateContactPersonPath = '/v0/api/COD/{id}/ContactPerson';
  static readonly GetCODHistoryPath = '/v0/api/COD/{id}/CodHistory';
  static readonly SearchAddressPath = '/v0/api/COD/searchAdress';
  static readonly SearchMeasurementLocationPath = '/v0/api/COD/searchMeasurementLocation';
  static readonly GetMeasurementSpotsByLocationPath = '/v0/api/COD/GetMeasurementSpotsByLocation';
  static readonly SearchBoilerplatePath = '/v0/api/COD/SearchBoilerplate';
  static readonly SearchCaseOfDamagePath = '/v0/api/COD/SearchCaseOfDamage';
  static readonly DownloadCODPicDocItemPath = '/v0/api/COD/download';
  static readonly GetPictureDocItemsPath = '/v0/api/COD/PictureDocItems/{codId}';
  static readonly SearchArticleByCodPath = '/v0/api/COD/{codId}/SearchArticleByCod';
  static readonly GetWizardCalculationArticlesPath = '/v0/api/COD/{codId}/GetWizardCalculationArticles';
  static readonly SearchArticleCategoryPath = '/v0/api/COD/SearchArticleCategory';
  static readonly SearchUnitPath = '/v0/api/COD/SearchUnit';
  static readonly GetItemsPath = '/v0/api/COD/{id}/items';
  static readonly GetReceiptItemSettingsPath = '/v0/api/COD/ReceiptItemSettings';
  static readonly GetFileAttachementPath = '/v0/api/COD/{id}/FileAttachement';
  static readonly GetMaxPosPicDocItemPath = '/v0/api/COD/CODId';
  static readonly GetResourceBookingPath = '/v0/api/COD/{id}/ResourceBookings';
  static readonly GetLeakDetectionResourceBookingPath = '/v0/api/COD/{id}/GetLeakDetectionResourceBooking';
  static readonly LoadSpotsWithoutEntriesPath = '/v0/api/COD/MeasurementSpotWithoutEntries';
  static readonly GetScmMessagesPath = '/v0/api/COD/{id}/ScmMessages';
  static readonly GetScmMessageDownloadPath = '/v0/api/COD/{id}/GetScmMessageDownload/{messageId}';
  static readonly SendScmMessagesPath = '/v0/api/COD/{caseOfDamageId}/SendScmMessages';
  static readonly SendInvoiceFromCODPath = '/v0/api/COD/SendInvoiceFromCOD';
  static readonly GetBlobReferencingObjectsPath = '/v0/api/COD/ReferencingBlobs/{blobId}';
  static readonly GetMeasurementProtocolsByCodPath = '/v0/api/COD/{id}/MeasurementProtocols';
  static readonly GetLeakageProtocolPath = '/v0/api/COD/LeakageLocationProtocol/{id}';
  static readonly GetLeakageEquipementsPath = '/v0/api/COD/GetLeakageEquipements';
  static readonly GetCODProcurementCostItemPath = '/v0/api/COD/{id}/ProcurementCostItems/{pciId}';
  static readonly GetCaseOfDamageMeasureItemsPath = '/v0/api/COD/{id}/MeasureItems';
  static readonly GetCODPowerConsumptionCardPath = '/v0/api/COD/{caseOfDamageId}/PowerConsumptionCard/{id}';
  static readonly SearchCODsPath = '/v0/api/COD/SearchCODs';
  static readonly SearchCODsByTelephonePath = '/v0/api/COD/SearchCODsByTelephone';
  static readonly SearchOpenCODsPath = '/v0/api/COD/SearchOpenCODs';
  static readonly GetCodHistoriesByCodPath = '/v0/api/COD/GetCodHistoriesByCod';
  static readonly GetLocationsByCodIdPath = '/v0/api/COD/LocationsByCodId';
  static readonly GetMetersByLocationPath = '/v0/api/COD/MetersByLocation';
  static readonly GetCaseOfDamageCommentsPath = '/v0/api/COD/CaseOfDamageComments/{objectId}';
  static readonly UpdateCODStatusPath = '/v0/api/COD/Status/{id}';
  static readonly CreateContactPersonPath = '/v0/api/COD/{caseOfDamageId}/ContactPerson';
  static readonly CreateCODInsureeContactPersonPath = '/v0/api/COD/{caseOfDamageId}/{contactPersonId}';
  static readonly DeleteCODInsureeContactPersonPath = '/v0/api/COD/{caseOfDamageId}/InsureeContactPerson';
  static readonly CreateCODItemPath = '/v0/api/COD/{codId}/items';
  static readonly BulkDeleteItemPath = '/v0/api/COD/{codId}/items';
  static readonly BulkDeleteItemGroupPath = '/v0/api/COD/{codId}/itemGroups';
  static readonly SaveReceiptItemSettingsPath = '/v0/api/COD/SaveReceiptItemSettings';
  static readonly CreateCODHistoryPath = '/v0/api/COD/{caseOfDamageId}/codHistory';
  static readonly DeleteCODHistoryPath = '/v0/api/COD/{caseOfDamageId}/{id}/deleteCodHistory';
  static readonly UpdateCODHistoryPath = '/v0/api/COD/{caseOfDamageId}/{id}/codHistory';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param id undefined
   */
  DeleteCodCommentResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v0/api/COD/comment/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  DeleteCodComment(id: string): __Observable<null> {
    return this.DeleteCodCommentResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.MarkCodHistoryAsDoneParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `caseOfDamageId`:
   *
   * - `command`:
   */
  MarkCodHistoryAsDoneResponse(params: CODService.MarkCodHistoryAsDoneParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.command;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.caseOfDamageId))}/${encodeURIComponent(String(params.id))}/MarkCodHistoryAsDone`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.MarkCodHistoryAsDoneParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `caseOfDamageId`:
   *
   * - `command`:
   */
  MarkCodHistoryAsDone(params: CODService.MarkCodHistoryAsDoneParams): __Observable<null> {
    return this.MarkCodHistoryAsDoneResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.CreateCODPicDocItemParams` containing the following parameters:
   *
   * - `command`:
   *
   * - `CODId`:
   */
  CreateCODPicDocItemResponse(params: CODService.CreateCODPicDocItemParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.command;
    if (params.CODId != null) __params = __params.set('CODId', params.CODId.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/CODPicDocItem`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.CreateCODPicDocItemParams` containing the following parameters:
   *
   * - `command`:
   *
   * - `CODId`:
   */
  CreateCODPicDocItem(params: CODService.CreateCODPicDocItemParams): __Observable<null> {
    return this.CreateCODPicDocItemResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.CreatePicDocItemsParams` containing the following parameters:
   *
   * - `command`:
   *
   * - `codId`:
   */
  CreatePicDocItemsResponse(params: CODService.CreatePicDocItemsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.command;
    if (params.codId != null) __params = __params.set('codId', params.codId.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/CODPicDocItems`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.CreatePicDocItemsParams` containing the following parameters:
   *
   * - `command`:
   *
   * - `codId`:
   */
  CreatePicDocItems(params: CODService.CreatePicDocItemsParams): __Observable<null> {
    return this.CreatePicDocItemsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.UpdateCODPicDocItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   */
  UpdateCODPicDocItemResponse(params: CODService.UpdateCODPicDocItemParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.id))}/Documentation`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.UpdateCODPicDocItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   */
  UpdateCODPicDocItem(params: CODService.UpdateCODPicDocItemParams): __Observable<null> {
    return this.UpdateCODPicDocItemResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  DeleteCODPicDocItemResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(id))}/Documentation`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  DeleteCODPicDocItem(id: number): __Observable<null> {
    return this.DeleteCODPicDocItemResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   * @return OK
   */
  GetCODPicDocItemResponse(id: number): __Observable<__StrictHttpResponse<GetCODPicDocItemModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(id))}/Documentation`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetCODPicDocItemModel>;
      })
    );
  }
  /**
   * @param id undefined
   * @return OK
   */
  GetCODPicDocItem(id: number): __Observable<GetCODPicDocItemModel> {
    return this.GetCODPicDocItemResponse(id).pipe(
      __map(_r => _r.body as GetCODPicDocItemModel)
    );
  }

  /**
   * @param params The `CODService.ChangeArticleCategoryParams` containing the following parameters:
   *
   * - `codItemId`:
   *
   * - `codId`:
   *
   * - `articleCategoryCode`:
   */
  ChangeArticleCategoryResponse(params: CODService.ChangeArticleCategoryParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.articleCategoryCode != null) __params = __params.set('articleCategoryCode', params.articleCategoryCode.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.codId))}/items/${encodeURIComponent(String(params.codItemId))}/ChangeArticleCategory`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.ChangeArticleCategoryParams` containing the following parameters:
   *
   * - `codItemId`:
   *
   * - `codId`:
   *
   * - `articleCategoryCode`:
   */
  ChangeArticleCategory(params: CODService.ChangeArticleCategoryParams): __Observable<null> {
    return this.ChangeArticleCategoryResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.ChangeArticleParams` containing the following parameters:
   *
   * - `codItemId`:
   *
   * - `codId`:
   *
   * - `articleId`:
   */
  ChangeArticleResponse(params: CODService.ChangeArticleParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.articleId != null) __params = __params.set('articleId', params.articleId.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.codId))}/items/${encodeURIComponent(String(params.codItemId))}/ChangeArticle`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.ChangeArticleParams` containing the following parameters:
   *
   * - `codItemId`:
   *
   * - `codId`:
   *
   * - `articleId`:
   */
  ChangeArticle(params: CODService.ChangeArticleParams): __Observable<null> {
    return this.ChangeArticleResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.ChangeUnitParams` containing the following parameters:
   *
   * - `codItemId`:
   *
   * - `codId`:
   *
   * - `unitCode`:
   */
  ChangeUnitResponse(params: CODService.ChangeUnitParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.unitCode != null) __params = __params.set('unitCode', params.unitCode.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.codId))}/items/${encodeURIComponent(String(params.codItemId))}/ChangeUnit`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.ChangeUnitParams` containing the following parameters:
   *
   * - `codItemId`:
   *
   * - `codId`:
   *
   * - `unitCode`:
   */
  ChangeUnit(params: CODService.ChangeUnitParams): __Observable<null> {
    return this.ChangeUnitResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.ChangeQuantityParams` containing the following parameters:
   *
   * - `codItemId`:
   *
   * - `codId`:
   *
   * - `quantity`:
   */
  ChangeQuantityResponse(params: CODService.ChangeQuantityParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.quantity != null) __params = __params.set('quantity', params.quantity.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.codId))}/items/${encodeURIComponent(String(params.codItemId))}/ChangeQuantity`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.ChangeQuantityParams` containing the following parameters:
   *
   * - `codItemId`:
   *
   * - `codId`:
   *
   * - `quantity`:
   */
  ChangeQuantity(params: CODService.ChangeQuantityParams): __Observable<null> {
    return this.ChangeQuantityResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.ChangeDescriptionParams` containing the following parameters:
   *
   * - `codItemId`:
   *
   * - `codId`:
   *
   * - `command`:
   */
  ChangeDescriptionResponse(params: CODService.ChangeDescriptionParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.command;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.codId))}/items/${encodeURIComponent(String(params.codItemId))}/ChangeDescription`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.ChangeDescriptionParams` containing the following parameters:
   *
   * - `codItemId`:
   *
   * - `codId`:
   *
   * - `command`:
   */
  ChangeDescription(params: CODService.ChangeDescriptionParams): __Observable<null> {
    return this.ChangeDescriptionResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.CreateCaseOfDamageOfferParams` containing the following parameters:
   *
   * - `codId`:
   *
   * - `command`:
   */
  CreateCaseOfDamageOfferResponse(params: CODService.CreateCaseOfDamageOfferParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.codId))}/CreateCaseOfDamageOffer`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.CreateCaseOfDamageOfferParams` containing the following parameters:
   *
   * - `codId`:
   *
   * - `command`:
   */
  CreateCaseOfDamageOffer(params: CODService.CreateCaseOfDamageOfferParams): __Observable<null> {
    return this.CreateCaseOfDamageOfferResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.CreateCODSettlementInvoiceParams` containing the following parameters:
   *
   * - `command`:
   *
   * - `CODId`:
   */
  CreateCODSettlementInvoiceResponse(params: CODService.CreateCODSettlementInvoiceParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.command;
    if (params.CODId != null) __params = __params.set('CODId', params.CODId.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/CreateCODSettlementInvoice`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.CreateCODSettlementInvoiceParams` containing the following parameters:
   *
   * - `command`:
   *
   * - `CODId`:
   */
  CreateCODSettlementInvoice(params: CODService.CreateCODSettlementInvoiceParams): __Observable<null> {
    return this.CreateCODSettlementInvoiceResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param request undefined
   */
  ConvertCODManualInvoiceToFinalSettlementResponse(request?: ConvertCODManualInvoiceToFinalSettlementRequest): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/ConvertCODManualInvoiceToFinalSettlement`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param request undefined
   */
  ConvertCODManualInvoiceToFinalSettlement(request?: ConvertCODManualInvoiceToFinalSettlementRequest): __Observable<null> {
    return this.ConvertCODManualInvoiceToFinalSettlementResponse(request).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.CreateCaseOfDamageInvoiceParams` containing the following parameters:
   *
   * - `command`:
   *
   * - `CODId`:
   */
  CreateCaseOfDamageInvoiceResponse(params: CODService.CreateCaseOfDamageInvoiceParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.command;
    if (params.CODId != null) __params = __params.set('CODId', params.CODId.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/CreateCaseOfDamageInvoice`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.CreateCaseOfDamageInvoiceParams` containing the following parameters:
   *
   * - `command`:
   *
   * - `CODId`:
   */
  CreateCaseOfDamageInvoice(params: CODService.CreateCaseOfDamageInvoiceParams): __Observable<null> {
    return this.CreateCaseOfDamageInvoiceResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.CreateCODPrePaymentInvoiceParams` containing the following parameters:
   *
   * - `command`:
   *
   * - `CODId`:
   */
  CreateCODPrePaymentInvoiceResponse(params: CODService.CreateCODPrePaymentInvoiceParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.command;
    if (params.CODId != null) __params = __params.set('CODId', params.CODId.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/CreateCODPrePaymentInvoice`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.CreateCODPrePaymentInvoiceParams` containing the following parameters:
   *
   * - `command`:
   *
   * - `CODId`:
   */
  CreateCODPrePaymentInvoice(params: CODService.CreateCODPrePaymentInvoiceParams): __Observable<null> {
    return this.CreateCODPrePaymentInvoiceResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.ChangeItemPriceParams` containing the following parameters:
   *
   * - `codItemId`:
   *
   * - `codId`:
   *
   * - `itemPrice`:
   */
  ChangeItemPriceResponse(params: CODService.ChangeItemPriceParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.itemPrice != null) __params = __params.set('itemPrice', params.itemPrice.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.codId))}/items/${encodeURIComponent(String(params.codItemId))}/ChangeItemPrice`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.ChangeItemPriceParams` containing the following parameters:
   *
   * - `codItemId`:
   *
   * - `codId`:
   *
   * - `itemPrice`:
   */
  ChangeItemPrice(params: CODService.ChangeItemPriceParams): __Observable<null> {
    return this.ChangeItemPriceResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.ChangeTotalCalculationPriceParams` containing the following parameters:
   *
   * - `codItemId`:
   *
   * - `codId`:
   *
   * - `totalCalculationPrice`:
   */
  ChangeTotalCalculationPriceResponse(params: CODService.ChangeTotalCalculationPriceParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.totalCalculationPrice != null) __params = __params.set('totalCalculationPrice', params.totalCalculationPrice.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.codId))}/items/${encodeURIComponent(String(params.codItemId))}/ChangeTotalCalculationPrice`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.ChangeTotalCalculationPriceParams` containing the following parameters:
   *
   * - `codItemId`:
   *
   * - `codId`:
   *
   * - `totalCalculationPrice`:
   */
  ChangeTotalCalculationPrice(params: CODService.ChangeTotalCalculationPriceParams): __Observable<null> {
    return this.ChangeTotalCalculationPriceResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.ChangeItemAcquisitionCostsParams` containing the following parameters:
   *
   * - `codItemId`:
   *
   * - `codId`:
   *
   * - `itemAcquisitionCosts`:
   */
  ChangeItemAcquisitionCostsResponse(params: CODService.ChangeItemAcquisitionCostsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.itemAcquisitionCosts != null) __params = __params.set('itemAcquisitionCosts', params.itemAcquisitionCosts.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.codId))}/items/${encodeURIComponent(String(params.codItemId))}/ChangeItemAcquisitionCosts`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.ChangeItemAcquisitionCostsParams` containing the following parameters:
   *
   * - `codItemId`:
   *
   * - `codId`:
   *
   * - `itemAcquisitionCosts`:
   */
  ChangeItemAcquisitionCosts(params: CODService.ChangeItemAcquisitionCostsParams): __Observable<null> {
    return this.ChangeItemAcquisitionCostsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.CreateFileAttachmentParams` containing the following parameters:
   *
   * - `codId`:
   *
   * - `command`:
   */
  CreateFileAttachmentResponse(params: CODService.CreateFileAttachmentParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.codId))}/FileAttachment`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.CreateFileAttachmentParams` containing the following parameters:
   *
   * - `codId`:
   *
   * - `command`:
   */
  CreateFileAttachment(params: CODService.CreateFileAttachmentParams): __Observable<null> {
    return this.CreateFileAttachmentResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.UpdateFileAttachmentParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   */
  UpdateFileAttachmentResponse(params: CODService.UpdateFileAttachmentParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.id))}/FileAttachment`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.UpdateFileAttachmentParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   */
  UpdateFileAttachment(params: CODService.UpdateFileAttachmentParams): __Observable<null> {
    return this.UpdateFileAttachmentResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  DeleteFileAttachmentResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(id))}/FileAttachment`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  DeleteFileAttachment(id: number): __Observable<null> {
    return this.DeleteFileAttachmentResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.CreateResourceBookingsParams` containing the following parameters:
   *
   * - `role`:
   *
   * - `command`:
   *
   * - `codId`:
   */
  CreateResourceBookingsResponse(params: CODService.CreateResourceBookingsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.role != null) __params = __params.set('role', params.role.toString());
    __body = params.command;
    if (params.codId != null) __params = __params.set('codId', params.codId.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/CreateResourceBooking`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.CreateResourceBookingsParams` containing the following parameters:
   *
   * - `role`:
   *
   * - `command`:
   *
   * - `codId`:
   */
  CreateResourceBookings(params: CODService.CreateResourceBookingsParams): __Observable<null> {
    return this.CreateResourceBookingsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.DeleteResourceBookingsParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `role`:
   *
   * - `codId`:
   */
  DeleteResourceBookingsResponse(params: CODService.DeleteResourceBookingsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.role != null) __params = __params.set('role', params.role.toString());
    if (params.codId != null) __params = __params.set('codId', params.codId.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.id))}/ResourceBooking`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.DeleteResourceBookingsParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `role`:
   *
   * - `codId`:
   */
  DeleteResourceBookings(params: CODService.DeleteResourceBookingsParams): __Observable<null> {
    return this.DeleteResourceBookingsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.UpdateResourceBookingsParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `role`:
   *
   * - `command`:
   *
   * - `codId`:
   */
  UpdateResourceBookingsResponse(params: CODService.UpdateResourceBookingsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.role != null) __params = __params.set('role', params.role.toString());
    __body = params.command;
    if (params.codId != null) __params = __params.set('codId', params.codId.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.id))}/ResourceBooking`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.UpdateResourceBookingsParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `role`:
   *
   * - `command`:
   *
   * - `codId`:
   */
  UpdateResourceBookings(params: CODService.UpdateResourceBookingsParams): __Observable<null> {
    return this.UpdateResourceBookingsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.UpdateMeasurementSpotParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   *
   * @return No Content
   */
  UpdateMeasurementSpotResponse(params: CODService.UpdateMeasurementSpotParams): __Observable<__StrictHttpResponse<{[key: string]: any}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.id))}/MeasurementSpot`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: any}>;
      })
    );
  }
  /**
   * @param params The `CODService.UpdateMeasurementSpotParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   *
   * @return No Content
   */
  UpdateMeasurementSpot(params: CODService.UpdateMeasurementSpotParams): __Observable<{[key: string]: any}> {
    return this.UpdateMeasurementSpotResponse(params).pipe(
      __map(_r => _r.body as {[key: string]: any})
    );
  }

  /**
   * @param id undefined
   */
  DeleteMeasurementSpotResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(id))}/MeasurementSpot`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  DeleteMeasurementSpot(id: number): __Observable<null> {
    return this.DeleteMeasurementSpotResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   * @return OK
   */
  GetMeasurementSpotResponse(id: number): __Observable<__StrictHttpResponse<GetMeasurementSpotModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(id))}/MeasurementSpot`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetMeasurementSpotModel>;
      })
    );
  }
  /**
   * @param id undefined
   * @return OK
   */
  GetMeasurementSpot(id: number): __Observable<GetMeasurementSpotModel> {
    return this.GetMeasurementSpotResponse(id).pipe(
      __map(_r => _r.body as GetMeasurementSpotModel)
    );
  }

  /**
   * @param params The `CODService.UpdateMeasurementLocationParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   *
   * @return No Content
   */
  UpdateMeasurementLocationResponse(params: CODService.UpdateMeasurementLocationParams): __Observable<__StrictHttpResponse<{[key: string]: any}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.id))}/MeasurementLocation`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: any}>;
      })
    );
  }
  /**
   * @param params The `CODService.UpdateMeasurementLocationParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   *
   * @return No Content
   */
  UpdateMeasurementLocation(params: CODService.UpdateMeasurementLocationParams): __Observable<{[key: string]: any}> {
    return this.UpdateMeasurementLocationResponse(params).pipe(
      __map(_r => _r.body as {[key: string]: any})
    );
  }

  /**
   * @param id undefined
   */
  DeleteMeasurementLocationResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(id))}/MeasurementLocation`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  DeleteMeasurementLocation(id: number): __Observable<null> {
    return this.DeleteMeasurementLocationResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   * @return OK
   */
  GetMeasurementLocationResponse(id: number): __Observable<__StrictHttpResponse<GetMeasurementLocationModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(id))}/MeasurementLocation`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetMeasurementLocationModel>;
      })
    );
  }
  /**
   * @param id undefined
   * @return OK
   */
  GetMeasurementLocation(id: number): __Observable<GetMeasurementLocationModel> {
    return this.GetMeasurementLocationResponse(id).pipe(
      __map(_r => _r.body as GetMeasurementLocationModel)
    );
  }

  /**
   * @param params The `CODService.UpdateMeasurementMeterParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   *
   * @return No Content
   */
  UpdateMeasurementMeterResponse(params: CODService.UpdateMeasurementMeterParams): __Observable<__StrictHttpResponse<{[key: string]: any}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.id))}/MeasurementMeter`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: any}>;
      })
    );
  }
  /**
   * @param params The `CODService.UpdateMeasurementMeterParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   *
   * @return No Content
   */
  UpdateMeasurementMeter(params: CODService.UpdateMeasurementMeterParams): __Observable<{[key: string]: any}> {
    return this.UpdateMeasurementMeterResponse(params).pipe(
      __map(_r => _r.body as {[key: string]: any})
    );
  }

  /**
   * @param id undefined
   */
  DeleteMeasurementMeterResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(id))}/MeasurementMeter`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  DeleteMeasurementMeter(id: number): __Observable<null> {
    return this.DeleteMeasurementMeterResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   * @return OK
   */
  GetMeasurementMeterResponse(id: number): __Observable<__StrictHttpResponse<GetMeasurementMeterModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(id))}/MeasurementMeter`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetMeasurementMeterModel>;
      })
    );
  }
  /**
   * @param id undefined
   * @return OK
   */
  GetMeasurementMeter(id: number): __Observable<GetMeasurementMeterModel> {
    return this.GetMeasurementMeterResponse(id).pipe(
      __map(_r => _r.body as GetMeasurementMeterModel)
    );
  }

  /**
   * @param params The `CODService.UpdateMeasurementTaskParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   *
   * @return No Content
   */
  UpdateMeasurementTaskResponse(params: CODService.UpdateMeasurementTaskParams): __Observable<__StrictHttpResponse<{[key: string]: any}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.id))}/MeasurementTask`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: any}>;
      })
    );
  }
  /**
   * @param params The `CODService.UpdateMeasurementTaskParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   *
   * @return No Content
   */
  UpdateMeasurementTask(params: CODService.UpdateMeasurementTaskParams): __Observable<{[key: string]: any}> {
    return this.UpdateMeasurementTaskResponse(params).pipe(
      __map(_r => _r.body as {[key: string]: any})
    );
  }

  /**
   * @param id undefined
   */
  DeleteMeasurementTaskResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(id))}/MeasurementTask`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  DeleteMeasurementTask(id: number): __Observable<null> {
    return this.DeleteMeasurementTaskResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   * @return OK
   */
  GetMeasurementTaskResponse(id: number): __Observable<__StrictHttpResponse<GetMeasurementTaskModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(id))}/MeasurementTask`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetMeasurementTaskModel>;
      })
    );
  }
  /**
   * @param id undefined
   * @return OK
   */
  GetMeasurementTask(id: number): __Observable<GetMeasurementTaskModel> {
    return this.GetMeasurementTaskResponse(id).pipe(
      __map(_r => _r.body as GetMeasurementTaskModel)
    );
  }

  /**
   * @param params The `CODService.UpdateMeasurementProtocolParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   *
   * @return No Content
   */
  UpdateMeasurementProtocolResponse(params: CODService.UpdateMeasurementProtocolParams): __Observable<__StrictHttpResponse<{[key: string]: any}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.id))}/MeasurementProtocol`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: any}>;
      })
    );
  }
  /**
   * @param params The `CODService.UpdateMeasurementProtocolParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   *
   * @return No Content
   */
  UpdateMeasurementProtocol(params: CODService.UpdateMeasurementProtocolParams): __Observable<{[key: string]: any}> {
    return this.UpdateMeasurementProtocolResponse(params).pipe(
      __map(_r => _r.body as {[key: string]: any})
    );
  }

  /**
   * @param id undefined
   * @return OK
   */
  GetMeasurementProtocolResponse(id: number): __Observable<__StrictHttpResponse<GetMeasurementProtocolModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(id))}/MeasurementProtocol`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetMeasurementProtocolModel>;
      })
    );
  }
  /**
   * @param id undefined
   * @return OK
   */
  GetMeasurementProtocol(id: number): __Observable<GetMeasurementProtocolModel> {
    return this.GetMeasurementProtocolResponse(id).pipe(
      __map(_r => _r.body as GetMeasurementProtocolModel)
    );
  }

  /**
   * @param command undefined
   * @return Created
   */
  CreateMeasurementSpotResponse(command?: CreateMeasurementSpotCommand): __Observable<__StrictHttpResponse<{[key: string]: any}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = command;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/MeasurementSpot`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: any}>;
      })
    );
  }
  /**
   * @param command undefined
   * @return Created
   */
  CreateMeasurementSpot(command?: CreateMeasurementSpotCommand): __Observable<{[key: string]: any}> {
    return this.CreateMeasurementSpotResponse(command).pipe(
      __map(_r => _r.body as {[key: string]: any})
    );
  }

  /**
   * @param params The `CODService.LoadMeasurementSpotsParams` containing the following parameters:
   *
   * - `MeasurementTaskId`:
   *
   * - `MeasurementProtocolId`:
   *
   * @return OK
   */
  LoadMeasurementSpotsResponse(params: CODService.LoadMeasurementSpotsParams): __Observable<__StrictHttpResponse<Array<LoadMeasurementSpotsModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.MeasurementTaskId != null) __params = __params.set('MeasurementTaskId', params.MeasurementTaskId.toString());
    if (params.MeasurementProtocolId != null) __params = __params.set('MeasurementProtocolId', params.MeasurementProtocolId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/MeasurementSpot`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LoadMeasurementSpotsModel>>;
      })
    );
  }
  /**
   * @param params The `CODService.LoadMeasurementSpotsParams` containing the following parameters:
   *
   * - `MeasurementTaskId`:
   *
   * - `MeasurementProtocolId`:
   *
   * @return OK
   */
  LoadMeasurementSpots(params: CODService.LoadMeasurementSpotsParams): __Observable<Array<LoadMeasurementSpotsModel>> {
    return this.LoadMeasurementSpotsResponse(params).pipe(
      __map(_r => _r.body as Array<LoadMeasurementSpotsModel>)
    );
  }

  /**
   * @param command undefined
   * @return Created
   */
  CreateMeasurementMeterResponse(command?: CreateMeasurementMeterCommand): __Observable<__StrictHttpResponse<{[key: string]: any}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = command;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/MeasurementMeter`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: any}>;
      })
    );
  }
  /**
   * @param command undefined
   * @return Created
   */
  CreateMeasurementMeter(command?: CreateMeasurementMeterCommand): __Observable<{[key: string]: any}> {
    return this.CreateMeasurementMeterResponse(command).pipe(
      __map(_r => _r.body as {[key: string]: any})
    );
  }

  /**
   * @param MeasurementProtocolId undefined
   * @return OK
   */
  LoadMeasurementMeterResponse(MeasurementProtocolId?: number): __Observable<__StrictHttpResponse<Array<LoadMeasurementMeterModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (MeasurementProtocolId != null) __params = __params.set('MeasurementProtocolId', MeasurementProtocolId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/MeasurementMeter`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LoadMeasurementMeterModel>>;
      })
    );
  }
  /**
   * @param MeasurementProtocolId undefined
   * @return OK
   */
  LoadMeasurementMeter(MeasurementProtocolId?: number): __Observable<Array<LoadMeasurementMeterModel>> {
    return this.LoadMeasurementMeterResponse(MeasurementProtocolId).pipe(
      __map(_r => _r.body as Array<LoadMeasurementMeterModel>)
    );
  }

  /**
   * @param params The `CODService.CreateMeasurementLocationParams` containing the following parameters:
   *
   * - `command`:
   *
   * - `MeasurementProtocolId`:
   */
  CreateMeasurementLocationResponse(params: CODService.CreateMeasurementLocationParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.command;
    if (params.MeasurementProtocolId != null) __params = __params.set('MeasurementProtocolId', params.MeasurementProtocolId.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/MeasurementLocation`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.CreateMeasurementLocationParams` containing the following parameters:
   *
   * - `command`:
   *
   * - `MeasurementProtocolId`:
   */
  CreateMeasurementLocation(params: CODService.CreateMeasurementLocationParams): __Observable<null> {
    return this.CreateMeasurementLocationResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.CreateMeasurementTaskParams` containing the following parameters:
   *
   * - `command`:
   *
   * - `MeasurementProtocolId`:
   */
  CreateMeasurementTaskResponse(params: CODService.CreateMeasurementTaskParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.command;
    if (params.MeasurementProtocolId != null) __params = __params.set('MeasurementProtocolId', params.MeasurementProtocolId.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/MeasurementTask`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.CreateMeasurementTaskParams` containing the following parameters:
   *
   * - `command`:
   *
   * - `MeasurementProtocolId`:
   */
  CreateMeasurementTask(params: CODService.CreateMeasurementTaskParams): __Observable<null> {
    return this.CreateMeasurementTaskResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.CreateMeasurementProtocolParams` containing the following parameters:
   *
   * - `command`:
   *
   * - `CaseOfDamageId`:
   */
  CreateMeasurementProtocolResponse(params: CODService.CreateMeasurementProtocolParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.command;
    if (params.CaseOfDamageId != null) __params = __params.set('CaseOfDamageId', params.CaseOfDamageId.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/MeasurementProtocol`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.CreateMeasurementProtocolParams` containing the following parameters:
   *
   * - `command`:
   *
   * - `CaseOfDamageId`:
   */
  CreateMeasurementProtocol(params: CODService.CreateMeasurementProtocolParams): __Observable<null> {
    return this.CreateMeasurementProtocolResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.CreateMeasurementEntryPictureParams` containing the following parameters:
   *
   * - `MeasurementEntryId`:
   *
   * - `command`:
   */
  CreateMeasurementEntryPictureResponse(params: CODService.CreateMeasurementEntryPictureParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.MeasurementEntryId))}/MeasurementEntryPicture`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.CreateMeasurementEntryPictureParams` containing the following parameters:
   *
   * - `MeasurementEntryId`:
   *
   * - `command`:
   */
  CreateMeasurementEntryPicture(params: CODService.CreateMeasurementEntryPictureParams): __Observable<null> {
    return this.CreateMeasurementEntryPictureResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.CreateMeasurementEntryParams` containing the following parameters:
   *
   * - `MeasurementWorkingOrderId`:
   *
   * - `MeasurementSpotId`:
   *
   * - `command`:
   */
  CreateMeasurementEntryResponse(params: CODService.CreateMeasurementEntryParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.command;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.MeasurementSpotId))}/${encodeURIComponent(String(params.MeasurementWorkingOrderId))}/MeasurementEntry`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.CreateMeasurementEntryParams` containing the following parameters:
   *
   * - `MeasurementWorkingOrderId`:
   *
   * - `MeasurementSpotId`:
   *
   * - `command`:
   */
  CreateMeasurementEntry(params: CODService.CreateMeasurementEntryParams): __Observable<null> {
    return this.CreateMeasurementEntryResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.ChangeMeasureParams` containing the following parameters:
   *
   * - `codId`:
   *
   * - `command`:
   */
  ChangeMeasureResponse(params: CODService.ChangeMeasureParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.codId))}/ChangeMeasure`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.ChangeMeasureParams` containing the following parameters:
   *
   * - `codId`:
   *
   * - `command`:
   */
  ChangeMeasure(params: CODService.ChangeMeasureParams): __Observable<null> {
    return this.ChangeMeasureResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.UpdateMeasurementEntryParams` containing the following parameters:
   *
   * - `MeasurementEntryId`:
   *
   * - `command`:
   */
  UpdateMeasurementEntryResponse(params: CODService.UpdateMeasurementEntryParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.MeasurementEntryId))}/MeasurementEntry`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.UpdateMeasurementEntryParams` containing the following parameters:
   *
   * - `MeasurementEntryId`:
   *
   * - `command`:
   */
  UpdateMeasurementEntry(params: CODService.UpdateMeasurementEntryParams): __Observable<null> {
    return this.UpdateMeasurementEntryResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.UpdateMeasurementEntryPictureParams` containing the following parameters:
   *
   * - `MeasurementEntryPictureId`:
   *
   * - `command`:
   */
  UpdateMeasurementEntryPictureResponse(params: CODService.UpdateMeasurementEntryPictureParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.MeasurementEntryPictureId))}/MeasurementEntryPicture`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.UpdateMeasurementEntryPictureParams` containing the following parameters:
   *
   * - `MeasurementEntryPictureId`:
   *
   * - `command`:
   */
  UpdateMeasurementEntryPicture(params: CODService.UpdateMeasurementEntryPictureParams): __Observable<null> {
    return this.UpdateMeasurementEntryPictureResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.CreateLeakageLocationProtocolParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   */
  CreateLeakageLocationProtocolResponse(params: CODService.CreateLeakageLocationProtocolParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.id))}/leakageLocationProtocol`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.CreateLeakageLocationProtocolParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   */
  CreateLeakageLocationProtocol(params: CODService.CreateLeakageLocationProtocolParams): __Observable<null> {
    return this.CreateLeakageLocationProtocolResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.UpdateLeakageLocationProtocolParams` containing the following parameters:
   *
   * - `llid`:
   *
   * - `command`:
   */
  UpdateLeakageLocationProtocolResponse(params: CODService.UpdateLeakageLocationProtocolParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.llid))}/leakageLocation`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.UpdateLeakageLocationProtocolParams` containing the following parameters:
   *
   * - `llid`:
   *
   * - `command`:
   */
  UpdateLeakageLocationProtocol(params: CODService.UpdateLeakageLocationProtocolParams): __Observable<null> {
    return this.UpdateLeakageLocationProtocolResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.UpdateLeakageLocationProtocolSignatureParams` containing the following parameters:
   *
   * - `llid`:
   *
   * - `command`:
   */
  UpdateLeakageLocationProtocolSignatureResponse(params: CODService.UpdateLeakageLocationProtocolSignatureParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.llid))}/leakageLocationSignature`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.UpdateLeakageLocationProtocolSignatureParams` containing the following parameters:
   *
   * - `llid`:
   *
   * - `command`:
   */
  UpdateLeakageLocationProtocolSignature(params: CODService.UpdateLeakageLocationProtocolSignatureParams): __Observable<null> {
    return this.UpdateLeakageLocationProtocolSignatureResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.UpdateLeakageLocationProtocolLocatorSignatureParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   *
   * @return No Content
   */
  UpdateLeakageLocationProtocolLocatorSignatureResponse(params: CODService.UpdateLeakageLocationProtocolLocatorSignatureParams): __Observable<__StrictHttpResponse<{[key: string]: any}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.id))}/LeakageLocationProtocolLocatorSignature`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: any}>;
      })
    );
  }
  /**
   * @param params The `CODService.UpdateLeakageLocationProtocolLocatorSignatureParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   *
   * @return No Content
   */
  UpdateLeakageLocationProtocolLocatorSignature(params: CODService.UpdateLeakageLocationProtocolLocatorSignatureParams): __Observable<{[key: string]: any}> {
    return this.UpdateLeakageLocationProtocolLocatorSignatureResponse(params).pipe(
      __map(_r => _r.body as {[key: string]: any})
    );
  }

  /**
   * @param params The `CODService.DeleteLeakageLocationProtocolParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `caseOfDamageId`:
   */
  DeleteLeakageLocationProtocolResponse(params: CODService.DeleteLeakageLocationProtocolParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.caseOfDamageId))}/${encodeURIComponent(String(params.id))}/DeleteLeakageLocationProtocol`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.DeleteLeakageLocationProtocolParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `caseOfDamageId`:
   */
  DeleteLeakageLocationProtocol(params: CODService.DeleteLeakageLocationProtocolParams): __Observable<null> {
    return this.DeleteLeakageLocationProtocolResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.MoveLOReportToAnotherCODParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `caseOfDamageId`:
   */
  MoveLOReportToAnotherCODResponse(params: CODService.MoveLOReportToAnotherCODParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.caseOfDamageId))}/${encodeURIComponent(String(params.id))}/MoveLOReportToAnotherCOD`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.MoveLOReportToAnotherCODParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `caseOfDamageId`:
   */
  MoveLOReportToAnotherCOD(params: CODService.MoveLOReportToAnotherCODParams): __Observable<null> {
    return this.MoveLOReportToAnotherCODResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.CreateProcurementCostItemParams` containing the following parameters:
   *
   * - `caseOfDamageId`:
   *
   * - `command`:
   *
   * @return OK
   */
  CreateProcurementCostItemResponse(params: CODService.CreateProcurementCostItemParams): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.caseOfDamageId))}/ProcurementCostItems`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * @param params The `CODService.CreateProcurementCostItemParams` containing the following parameters:
   *
   * - `caseOfDamageId`:
   *
   * - `command`:
   *
   * @return OK
   */
  CreateProcurementCostItem(params: CODService.CreateProcurementCostItemParams): __Observable<number> {
    return this.CreateProcurementCostItemResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param caseOfDamageId undefined
   * @return OK
   */
  GetCODProcurementCostItemsResponse(caseOfDamageId: string): __Observable<__StrictHttpResponse<ProcurementCostItemsModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(caseOfDamageId))}/ProcurementCostItems`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProcurementCostItemsModel>;
      })
    );
  }
  /**
   * @param caseOfDamageId undefined
   * @return OK
   */
  GetCODProcurementCostItems(caseOfDamageId: string): __Observable<ProcurementCostItemsModel> {
    return this.GetCODProcurementCostItemsResponse(caseOfDamageId).pipe(
      __map(_r => _r.body as ProcurementCostItemsModel)
    );
  }

  /**
   * @param params The `CODService.UpdateProcurementCostItemParams` containing the following parameters:
   *
   * - `procurementCostItemId`:
   *
   * - `caseOfDamageId`:
   *
   * - `command`:
   */
  UpdateProcurementCostItemResponse(params: CODService.UpdateProcurementCostItemParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.command;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.caseOfDamageId))}/ProcurementCostItems/${encodeURIComponent(String(params.procurementCostItemId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.UpdateProcurementCostItemParams` containing the following parameters:
   *
   * - `procurementCostItemId`:
   *
   * - `caseOfDamageId`:
   *
   * - `command`:
   */
  UpdateProcurementCostItem(params: CODService.UpdateProcurementCostItemParams): __Observable<null> {
    return this.UpdateProcurementCostItemResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.DeleteProcurementCostItemParams` containing the following parameters:
   *
   * - `procurementCostItemId`:
   *
   * - `caseOfDamageId`:
   */
  DeleteProcurementCostItemResponse(params: CODService.DeleteProcurementCostItemParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.caseOfDamageId))}/ProcurementCostItems/${encodeURIComponent(String(params.procurementCostItemId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.DeleteProcurementCostItemParams` containing the following parameters:
   *
   * - `procurementCostItemId`:
   *
   * - `caseOfDamageId`:
   */
  DeleteProcurementCostItem(params: CODService.DeleteProcurementCostItemParams): __Observable<null> {
    return this.DeleteProcurementCostItemResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   * @return OK
   */
  GetCODPriceListGroupsResponse(id: string): __Observable<__StrictHttpResponse<GetCODPriceListGroupsModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(id))}/PriceListGroups`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetCODPriceListGroupsModel>;
      })
    );
  }
  /**
   * @param id undefined
   * @return OK
   */
  GetCODPriceListGroups(id: string): __Observable<GetCODPriceListGroupsModel> {
    return this.GetCODPriceListGroupsResponse(id).pipe(
      __map(_r => _r.body as GetCODPriceListGroupsModel)
    );
  }

  /**
   * @param params The `CODService.AddCaseOfDamageMeasureItemParams` containing the following parameters:
   *
   * - `caseOfDamageId`:
   *
   * - `command`:
   */
  AddCaseOfDamageMeasureItemResponse(params: CODService.AddCaseOfDamageMeasureItemParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.caseOfDamageId))}/AddCaseOfDamageMeasureItem`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.AddCaseOfDamageMeasureItemParams` containing the following parameters:
   *
   * - `caseOfDamageId`:
   *
   * - `command`:
   */
  AddCaseOfDamageMeasureItem(params: CODService.AddCaseOfDamageMeasureItemParams): __Observable<null> {
    return this.AddCaseOfDamageMeasureItemResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.UpdateCaseOfDamageMeasureItemParams` containing the following parameters:
   *
   * - `caseOfDamageId`:
   *
   * - `command`:
   */
  UpdateCaseOfDamageMeasureItemResponse(params: CODService.UpdateCaseOfDamageMeasureItemParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.caseOfDamageId))}/UpdateCaseOfDamageMeasureItem`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.UpdateCaseOfDamageMeasureItemParams` containing the following parameters:
   *
   * - `caseOfDamageId`:
   *
   * - `command`:
   */
  UpdateCaseOfDamageMeasureItem(params: CODService.UpdateCaseOfDamageMeasureItemParams): __Observable<null> {
    return this.UpdateCaseOfDamageMeasureItemResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.DeleteCaseOfDamageMeasureItemParams` containing the following parameters:
   *
   * - `caseOfDamageMeasureItemId`:
   *
   * - `caseOfDamageId`:
   */
  DeleteCaseOfDamageMeasureItemResponse(params: CODService.DeleteCaseOfDamageMeasureItemParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.caseOfDamageId))}/DeleteCaseOfDamageMeasureItem/${encodeURIComponent(String(params.caseOfDamageMeasureItemId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.DeleteCaseOfDamageMeasureItemParams` containing the following parameters:
   *
   * - `caseOfDamageMeasureItemId`:
   *
   * - `caseOfDamageId`:
   */
  DeleteCaseOfDamageMeasureItem(params: CODService.DeleteCaseOfDamageMeasureItemParams): __Observable<null> {
    return this.DeleteCaseOfDamageMeasureItemResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.AssignMeasureItemToCalculationItemParams` containing the following parameters:
   *
   * - `caseOfDamageId`:
   *
   * - `Position`:
   *
   * - `MeasureItemID`:
   *
   * - `CalculationItemId`:
   */
  AssignMeasureItemToCalculationItemResponse(params: CODService.AssignMeasureItemToCalculationItemParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;




    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.caseOfDamageId))}/items/${encodeURIComponent(String(params.CalculationItemId))}/${encodeURIComponent(String(params.MeasureItemID))}/${encodeURIComponent(String(params.Position))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.AssignMeasureItemToCalculationItemParams` containing the following parameters:
   *
   * - `caseOfDamageId`:
   *
   * - `Position`:
   *
   * - `MeasureItemID`:
   *
   * - `CalculationItemId`:
   */
  AssignMeasureItemToCalculationItem(params: CODService.AssignMeasureItemToCalculationItemParams): __Observable<null> {
    return this.AssignMeasureItemToCalculationItemResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.DeleteCalculationItemMeasureItemParams` containing the following parameters:
   *
   * - `caseOfDamageId`:
   *
   * - `calculationItemMeasureItemId`:
   */
  DeleteCalculationItemMeasureItemResponse(params: CODService.DeleteCalculationItemMeasureItemParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.caseOfDamageId))}/DeleteCalculationItemMeasureItem/${encodeURIComponent(String(params.calculationItemMeasureItemId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.DeleteCalculationItemMeasureItemParams` containing the following parameters:
   *
   * - `caseOfDamageId`:
   *
   * - `calculationItemMeasureItemId`:
   */
  DeleteCalculationItemMeasureItem(params: CODService.DeleteCalculationItemMeasureItemParams): __Observable<null> {
    return this.DeleteCalculationItemMeasureItemResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.ChangeCalculationItemMeasureItemPositionParams` containing the following parameters:
   *
   * - `caseOfDamageId`:
   *
   * - `ItemID`:
   *
   * - `command`:
   */
  ChangeCalculationItemMeasureItemPositionResponse(params: CODService.ChangeCalculationItemMeasureItemPositionParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.command;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.caseOfDamageId))}/ChangeCalculationItemMeasureItemPosition/${encodeURIComponent(String(params.ItemID))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.ChangeCalculationItemMeasureItemPositionParams` containing the following parameters:
   *
   * - `caseOfDamageId`:
   *
   * - `ItemID`:
   *
   * - `command`:
   */
  ChangeCalculationItemMeasureItemPosition(params: CODService.ChangeCalculationItemMeasureItemPositionParams): __Observable<null> {
    return this.ChangeCalculationItemMeasureItemPositionResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.CreateCODCalcItemsParams` containing the following parameters:
   *
   * - `codId`:
   *
   * - `command`:
   */
  CreateCODCalcItemsResponse(params: CODService.CreateCODCalcItemsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.codId))}/CODCalcItems`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.CreateCODCalcItemsParams` containing the following parameters:
   *
   * - `codId`:
   *
   * - `command`:
   */
  CreateCODCalcItems(params: CODService.CreateCODCalcItemsParams): __Observable<null> {
    return this.CreateCODCalcItemsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param command undefined
   * @return OK
   */
  CloneCODInvoiceResponse(command?: CloneCODInvoiceCommand): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = command;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/CloneCODInvoice`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @param command undefined
   * @return OK
   */
  CloneCODInvoice(command?: CloneCODInvoiceCommand): __Observable<string> {
    return this.CloneCODInvoiceResponse(command).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param id undefined
   */
  SynchronizeCODMeasureItemsResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(id))}/SynchronizeCODMeasureItems`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  SynchronizeCODMeasureItems(id: string): __Observable<null> {
    return this.SynchronizeCODMeasureItemsResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.ChangeIsOutsideCountyParams` containing the following parameters:
   *
   * - `codId`:
   *
   * - `command`:
   */
  ChangeIsOutsideCountyResponse(params: CODService.ChangeIsOutsideCountyParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.codId))}/IsOutsideCounty`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.ChangeIsOutsideCountyParams` containing the following parameters:
   *
   * - `codId`:
   *
   * - `command`:
   */
  ChangeIsOutsideCounty(params: CODService.ChangeIsOutsideCountyParams): __Observable<null> {
    return this.ChangeIsOutsideCountyResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.ChangekindOfDamageFloodingParams` containing the following parameters:
   *
   * - `codId`:
   *
   * - `command`:
   */
  ChangekindOfDamageFloodingResponse(params: CODService.ChangekindOfDamageFloodingParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.codId))}/IskindOfDamageFlooding`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.ChangekindOfDamageFloodingParams` containing the following parameters:
   *
   * - `codId`:
   *
   * - `command`:
   */
  ChangekindOfDamageFlooding(params: CODService.ChangekindOfDamageFloodingParams): __Observable<null> {
    return this.ChangekindOfDamageFloodingResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.CreatePowerConsumptionCardParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   */
  CreatePowerConsumptionCardResponse(params: CODService.CreatePowerConsumptionCardParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.id))}/PowerConsumptionCard`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.CreatePowerConsumptionCardParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   */
  CreatePowerConsumptionCard(params: CODService.CreatePowerConsumptionCardParams): __Observable<null> {
    return this.CreatePowerConsumptionCardResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.UpdatePowerConsumptionCardParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   */
  UpdatePowerConsumptionCardResponse(params: CODService.UpdatePowerConsumptionCardParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.id))}/PowerConsumptionCard`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.UpdatePowerConsumptionCardParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   */
  UpdatePowerConsumptionCard(params: CODService.UpdatePowerConsumptionCardParams): __Observable<null> {
    return this.UpdatePowerConsumptionCardResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.DeletePowerConsumptionCardParams` containing the following parameters:
   *
   * - `pccId`:
   *
   * - `id`:
   */
  DeletePowerConsumptionCardResponse(params: CODService.DeletePowerConsumptionCardParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.id))}/PowerConsumptionCard/${encodeURIComponent(String(params.pccId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.DeletePowerConsumptionCardParams` containing the following parameters:
   *
   * - `pccId`:
   *
   * - `id`:
   */
  DeletePowerConsumptionCard(params: CODService.DeletePowerConsumptionCardParams): __Observable<null> {
    return this.DeletePowerConsumptionCardResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param codId undefined
   */
  ChangeSendDamageDocResponse(codId: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(codId))}/ChangeSendDamageDoc`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param codId undefined
   */
  ChangeSendDamageDoc(codId: string): __Observable<null> {
    return this.ChangeSendDamageDocResponse(codId).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.ChangeSendLODocParams` containing the following parameters:
   *
   * - `codId`:
   *
   * - `status`:
   */
  ChangeSendLODocResponse(params: CODService.ChangeSendLODocParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.status != null) __params = __params.set('status', params.status.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.codId))}/ChangeSendLODoc`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.ChangeSendLODocParams` containing the following parameters:
   *
   * - `codId`:
   *
   * - `status`:
   */
  ChangeSendLODoc(params: CODService.ChangeSendLODocParams): __Observable<null> {
    return this.ChangeSendLODocResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.ChangeProjectProfileParams` containing the following parameters:
   *
   * - `codId`:
   *
   * - `command`:
   */
  ChangeProjectProfileResponse(params: CODService.ChangeProjectProfileParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.codId))}/ChangeProjectProfile`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.ChangeProjectProfileParams` containing the following parameters:
   *
   * - `codId`:
   *
   * - `command`:
   */
  ChangeProjectProfile(params: CODService.ChangeProjectProfileParams): __Observable<null> {
    return this.ChangeProjectProfileResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param Id undefined
   * @return Created
   */
  CreateLeakageLocationPdfResponse(Id: number): __Observable<__StrictHttpResponse<{[key: string]: any}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(Id))}/CreateLeakageLocationPdf`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: any}>;
      })
    );
  }
  /**
   * @param Id undefined
   * @return Created
   */
  CreateLeakageLocationPdf(Id: number): __Observable<{[key: string]: any}> {
    return this.CreateLeakageLocationPdfResponse(Id).pipe(
      __map(_r => _r.body as {[key: string]: any})
    );
  }

  /**
   * @param command undefined
   */
  MigrateDummyProjectsResponse(command?: MigrateDummyProjectsCommand): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = command;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/MigrateDummyProjects`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param command undefined
   */
  MigrateDummyProjects(command?: MigrateDummyProjectsCommand): __Observable<null> {
    return this.MigrateDummyProjectsResponse(command).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.ChangeCODCustomerPriceDecisiveParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `customerIdPriceDecisive`:
   */
  ChangeCODCustomerPriceDecisiveResponse(params: CODService.ChangeCODCustomerPriceDecisiveParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.id))}/CODCustomerPriceDecisive/${encodeURIComponent(String(params.customerIdPriceDecisive))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.ChangeCODCustomerPriceDecisiveParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `customerIdPriceDecisive`:
   */
  ChangeCODCustomerPriceDecisive(params: CODService.ChangeCODCustomerPriceDecisiveParams): __Observable<null> {
    return this.ChangeCODCustomerPriceDecisiveResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.ChangeCODDateOfAcceptanceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `dateOfAcceptance`:
   */
  ChangeCODDateOfAcceptanceResponse(params: CODService.ChangeCODDateOfAcceptanceParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.id))}/CODDateOfAcceptance/${encodeURIComponent(String(params.dateOfAcceptance))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.ChangeCODDateOfAcceptanceParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `dateOfAcceptance`:
   */
  ChangeCODDateOfAcceptance(params: CODService.ChangeCODDateOfAcceptanceParams): __Observable<null> {
    return this.ChangeCODDateOfAcceptanceResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.CreateSBBriefPdfParams` containing the following parameters:
   *
   * - `Id`:
   *
   * - `command`:
   *
   * @return OK
   */
  CreateSBBriefPdfResponse(params: CODService.CreateSBBriefPdfParams): __Observable<__StrictHttpResponse<Blob>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.Id))}/CreateSBBriefPdf`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'blob'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Blob>;
      })
    );
  }
  /**
   * @param params The `CODService.CreateSBBriefPdfParams` containing the following parameters:
   *
   * - `Id`:
   *
   * - `command`:
   *
   * @return OK
   */
  CreateSBBriefPdf(params: CODService.CreateSBBriefPdfParams): __Observable<Blob> {
    return this.CreateSBBriefPdfResponse(params).pipe(
      __map(_r => _r.body as Blob)
    );
  }

  /**
   * @param params The `CODService.SendSBBriefPdfParams` containing the following parameters:
   *
   * - `Id`:
   *
   * - `command`:
   */
  SendSBBriefPdfResponse(params: CODService.SendSBBriefPdfParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.Id))}/SendSBBriefPdf`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.SendSBBriefPdfParams` containing the following parameters:
   *
   * - `Id`:
   *
   * - `command`:
   */
  SendSBBriefPdf(params: CODService.SendSBBriefPdfParams): __Observable<null> {
    return this.SendSBBriefPdfResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.SendEmailParams` containing the following parameters:
   *
   * - `codId`:
   *
   * - `command`:
   */
  SendEmailResponse(params: CODService.SendEmailParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.codId))}/email`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.SendEmailParams` containing the following parameters:
   *
   * - `codId`:
   *
   * - `command`:
   */
  SendEmail(params: CODService.SendEmailParams): __Observable<null> {
    return this.SendEmailResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param command undefined
   * @return OK
   */
  SplitCodResponse(command?: CloneCodCommand): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = command;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/SplitCod`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @param command undefined
   * @return OK
   */
  SplitCod(command?: CloneCodCommand): __Observable<string> {
    return this.SplitCodResponse(command).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param command undefined
   */
  UpdateCODGeoDataByStatusResponse(command?: UpdateCODGeoDataByStatusCommand): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = command;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/COD/GeoData`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param command undefined
   */
  UpdateCODGeoDataByStatus(command?: UpdateCODGeoDataByStatusCommand): __Observable<null> {
    return this.UpdateCODGeoDataByStatusResponse(command).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.AssignConstructionEngineerToCODParams` containing the following parameters:
   *
   * - `Id`:
   *
   * - `command`:
   */
  AssignConstructionEngineerToCODResponse(params: CODService.AssignConstructionEngineerToCODParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.Id))}/AssignConstructionEngineer`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.AssignConstructionEngineerToCODParams` containing the following parameters:
   *
   * - `Id`:
   *
   * - `command`:
   */
  AssignConstructionEngineerToCOD(params: CODService.AssignConstructionEngineerToCODParams): __Observable<null> {
    return this.AssignConstructionEngineerToCODResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.SendContractParams` containing the following parameters:
   *
   * - `Id`:
   *
   * - `command`:
   */
  SendContractResponse(params: CODService.SendContractParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.Id))}/SendContract`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.SendContractParams` containing the following parameters:
   *
   * - `Id`:
   *
   * - `command`:
   */
  SendContract(params: CODService.SendContractParams): __Observable<null> {
    return this.SendContractResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.UpdateCustomerReachedParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   *
   * @return No Content
   */
  UpdateCustomerReachedResponse(params: CODService.UpdateCustomerReachedParams): __Observable<__StrictHttpResponse<{[key: string]: any}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/COD/CustomerReached/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: any}>;
      })
    );
  }
  /**
   * @param params The `CODService.UpdateCustomerReachedParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   *
   * @return No Content
   */
  UpdateCustomerReached(params: CODService.UpdateCustomerReachedParams): __Observable<{[key: string]: any}> {
    return this.UpdateCustomerReachedResponse(params).pipe(
      __map(_r => _r.body as {[key: string]: any})
    );
  }

  /**
   * @param command undefined
   * @return Created
   */
  CreateCaseOfDamageCommentResponse(command?: CreateCodCommentCommand): __Observable<__StrictHttpResponse<{[key: string]: any}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = command;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/CreateCaseOfDamageComment`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: any}>;
      })
    );
  }
  /**
   * @param command undefined
   * @return Created
   */
  CreateCaseOfDamageComment(command?: CreateCodCommentCommand): __Observable<{[key: string]: any}> {
    return this.CreateCaseOfDamageCommentResponse(command).pipe(
      __map(_r => _r.body as {[key: string]: any})
    );
  }

  /**
   * @param command undefined
   */
  UpdateCaseOfDamageCommentResponse(command?: UpdateCodCommentCommand): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = command;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/UpdateCaseOfDamageComment`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param command undefined
   */
  UpdateCaseOfDamageComment(command?: UpdateCodCommentCommand): __Observable<null> {
    return this.UpdateCaseOfDamageCommentResponse(command).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.GetCodByTechnicianParams` containing the following parameters:
   *
   * - `sortOrder`:
   *
   * - `StartDate`:
   *
   * - `SearchText`:
   *
   * - `PageSize`:
   *
   * - `PageNumber`:
   *
   * - `EndDate`:
   *
   * - `CODStatus`:
   *
   * @return OK
   */
  GetCodByTechnicianResponse(params: CODService.GetCodByTechnicianParams): __Observable<__StrictHttpResponse<GetCodByTechnicianModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.sortOrder != null) __params = __params.set('sortOrder', params.sortOrder.toString());
    if (params.StartDate != null) __params = __params.set('StartDate', params.StartDate.toString());
    if (params.SearchText != null) __params = __params.set('SearchText', params.SearchText.toString());
    if (params.PageSize != null) __params = __params.set('PageSize', params.PageSize.toString());
    if (params.PageNumber != null) __params = __params.set('PageNumber', params.PageNumber.toString());
    if (params.EndDate != null) __params = __params.set('EndDate', params.EndDate.toString());
    if (params.CODStatus != null) __params = __params.set('CODStatus', params.CODStatus.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/GetCodByTechnician`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetCodByTechnicianModel>;
      })
    );
  }
  /**
   * @param params The `CODService.GetCodByTechnicianParams` containing the following parameters:
   *
   * - `sortOrder`:
   *
   * - `StartDate`:
   *
   * - `SearchText`:
   *
   * - `PageSize`:
   *
   * - `PageNumber`:
   *
   * - `EndDate`:
   *
   * - `CODStatus`:
   *
   * @return OK
   */
  GetCodByTechnician(params: CODService.GetCodByTechnicianParams): __Observable<GetCodByTechnicianModel> {
    return this.GetCodByTechnicianResponse(params).pipe(
      __map(_r => _r.body as GetCodByTechnicianModel)
    );
  }

  /**
   * @param params The `CODService.GetCodHistoriesReportParams` containing the following parameters:
   *
   * - `status`:
   *
   * - `PageSize`:
   *
   * - `PageNumber`:
   *
   * - `EmployeeId`:
   *
   * - `CODId`:
   *
   * @return OK
   */
  GetCodHistoriesReportResponse(params: CODService.GetCodHistoriesReportParams): __Observable<__StrictHttpResponse<GetCodHistoriesReportModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.status != null) __params = __params.set('status', params.status.toString());
    if (params.PageSize != null) __params = __params.set('PageSize', params.PageSize.toString());
    if (params.PageNumber != null) __params = __params.set('PageNumber', params.PageNumber.toString());
    if (params.EmployeeId != null) __params = __params.set('EmployeeId', params.EmployeeId.toString());
    if (params.CODId != null) __params = __params.set('CODId', params.CODId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/cod/histories`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetCodHistoriesReportModel>;
      })
    );
  }
  /**
   * @param params The `CODService.GetCodHistoriesReportParams` containing the following parameters:
   *
   * - `status`:
   *
   * - `PageSize`:
   *
   * - `PageNumber`:
   *
   * - `EmployeeId`:
   *
   * - `CODId`:
   *
   * @return OK
   */
  GetCodHistoriesReport(params: CODService.GetCodHistoriesReportParams): __Observable<GetCodHistoriesReportModel> {
    return this.GetCodHistoriesReportResponse(params).pipe(
      __map(_r => _r.body as GetCodHistoriesReportModel)
    );
  }

  /**
   * @param params The `CODService.GetLeakageLocationProtocolListParams` containing the following parameters:
   *
   * - `PageSize`:
   *
   * - `PageNumber`:
   *
   * - `CODId`:
   *
   * @return OK
   */
  GetLeakageLocationProtocolListResponse(params: CODService.GetLeakageLocationProtocolListParams): __Observable<__StrictHttpResponse<GetLeakageLocationProtocolListModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.PageSize != null) __params = __params.set('PageSize', params.PageSize.toString());
    if (params.PageNumber != null) __params = __params.set('PageNumber', params.PageNumber.toString());
    if (params.CODId != null) __params = __params.set('CODId', params.CODId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/LeakageLocationProtocolList`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetLeakageLocationProtocolListModel>;
      })
    );
  }
  /**
   * @param params The `CODService.GetLeakageLocationProtocolListParams` containing the following parameters:
   *
   * - `PageSize`:
   *
   * - `PageNumber`:
   *
   * - `CODId`:
   *
   * @return OK
   */
  GetLeakageLocationProtocolList(params: CODService.GetLeakageLocationProtocolListParams): __Observable<GetLeakageLocationProtocolListModel> {
    return this.GetLeakageLocationProtocolListResponse(params).pipe(
      __map(_r => _r.body as GetLeakageLocationProtocolListModel)
    );
  }

  /**
   * @param params The `CODService.GetContactPersonsByCodListParams` containing the following parameters:
   *
   * - `PageSize`:
   *
   * - `PageNumber`:
   *
   * - `CODId`:
   *
   * @return OK
   */
  GetContactPersonsByCodListResponse(params: CODService.GetContactPersonsByCodListParams): __Observable<__StrictHttpResponse<GetContactPersonsByCodListModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.PageSize != null) __params = __params.set('PageSize', params.PageSize.toString());
    if (params.PageNumber != null) __params = __params.set('PageNumber', params.PageNumber.toString());
    if (params.CODId != null) __params = __params.set('CODId', params.CODId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/ContactPersonsByCodList`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetContactPersonsByCodListModel>;
      })
    );
  }
  /**
   * @param params The `CODService.GetContactPersonsByCodListParams` containing the following parameters:
   *
   * - `PageSize`:
   *
   * - `PageNumber`:
   *
   * - `CODId`:
   *
   * @return OK
   */
  GetContactPersonsByCodList(params: CODService.GetContactPersonsByCodListParams): __Observable<GetContactPersonsByCodListModel> {
    return this.GetContactPersonsByCodListResponse(params).pipe(
      __map(_r => _r.body as GetContactPersonsByCodListModel)
    );
  }

  /**
   * @param command undefined
   * @return Created
   */
  CreateCODResponse(command?: CreateCODCommand): __Observable<__StrictHttpResponse<{[key: string]: any}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = command;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: any}>;
      })
    );
  }
  /**
   * @param command undefined
   * @return Created
   */
  CreateCOD(command?: CreateCODCommand): __Observable<{[key: string]: any}> {
    return this.CreateCODResponse(command).pipe(
      __map(_r => _r.body as {[key: string]: any})
    );
  }

  /**
   * @param id undefined
   * @return OK
   */
  GetCODResponse(id: string): __Observable<__StrictHttpResponse<GetCODModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetCODModel>;
      })
    );
  }
  /**
   * @param id undefined
   * @return OK
   */
  GetCOD(id: string): __Observable<GetCODModel> {
    return this.GetCODResponse(id).pipe(
      __map(_r => _r.body as GetCODModel)
    );
  }

  /**
   * @param params The `CODService.UpdateCODParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   *
   * @return No Content
   */
  UpdateCODResponse(params: CODService.UpdateCODParams): __Observable<__StrictHttpResponse<{[key: string]: any}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: any}>;
      })
    );
  }
  /**
   * @param params The `CODService.UpdateCODParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   *
   * @return No Content
   */
  UpdateCOD(params: CODService.UpdateCODParams): __Observable<{[key: string]: any}> {
    return this.UpdateCODResponse(params).pipe(
      __map(_r => _r.body as {[key: string]: any})
    );
  }

  /**
   * @param id undefined
   */
  DeleteCODResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  DeleteCOD(id: string): __Observable<null> {
    return this.DeleteCODResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   * @return OK
   */
  GetContactPersonResponse(id: number): __Observable<__StrictHttpResponse<GetContactPersonModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(id))}/ContactPerson`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetContactPersonModel>;
      })
    );
  }
  /**
   * @param id undefined
   * @return OK
   */
  GetContactPerson(id: number): __Observable<GetContactPersonModel> {
    return this.GetContactPersonResponse(id).pipe(
      __map(_r => _r.body as GetContactPersonModel)
    );
  }

  /**
   * @param params The `CODService.UpdateContactPersonParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   *
   * @return No Content
   */
  UpdateContactPersonResponse(params: CODService.UpdateContactPersonParams): __Observable<__StrictHttpResponse<{[key: string]: any}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.id))}/ContactPerson`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: any}>;
      })
    );
  }
  /**
   * @param params The `CODService.UpdateContactPersonParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   *
   * @return No Content
   */
  UpdateContactPerson(params: CODService.UpdateContactPersonParams): __Observable<{[key: string]: any}> {
    return this.UpdateContactPersonResponse(params).pipe(
      __map(_r => _r.body as {[key: string]: any})
    );
  }

  /**
   * @param id undefined
   * @return OK
   */
  GetCODHistoryResponse(id: number): __Observable<__StrictHttpResponse<GetCODHistoryModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(id))}/CodHistory`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetCODHistoryModel>;
      })
    );
  }
  /**
   * @param id undefined
   * @return OK
   */
  GetCODHistory(id: number): __Observable<GetCODHistoryModel> {
    return this.GetCODHistoryResponse(id).pipe(
      __map(_r => _r.body as GetCODHistoryModel)
    );
  }

  /**
   * @param customerId undefined
   * @return OK
   */
  SearchAddressResponse(customerId?: string): __Observable<__StrictHttpResponse<Array<SearchAddressModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (customerId != null) __params = __params.set('customerId', customerId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/searchAdress`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SearchAddressModel>>;
      })
    );
  }
  /**
   * @param customerId undefined
   * @return OK
   */
  SearchAddress(customerId?: string): __Observable<Array<SearchAddressModel>> {
    return this.SearchAddressResponse(customerId).pipe(
      __map(_r => _r.body as Array<SearchAddressModel>)
    );
  }

  /**
   * @param MeasurementProtocolId undefined
   * @return OK
   */
  SearchMeasurementLocationResponse(MeasurementProtocolId?: number): __Observable<__StrictHttpResponse<Array<SearchMeasurementLocationModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (MeasurementProtocolId != null) __params = __params.set('MeasurementProtocolId', MeasurementProtocolId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/searchMeasurementLocation`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SearchMeasurementLocationModel>>;
      })
    );
  }
  /**
   * @param MeasurementProtocolId undefined
   * @return OK
   */
  SearchMeasurementLocation(MeasurementProtocolId?: number): __Observable<Array<SearchMeasurementLocationModel>> {
    return this.SearchMeasurementLocationResponse(MeasurementProtocolId).pipe(
      __map(_r => _r.body as Array<SearchMeasurementLocationModel>)
    );
  }

  /**
   * @param MeasurementLocationId undefined
   * @return OK
   */
  GetMeasurementSpotsByLocationResponse(MeasurementLocationId?: number): __Observable<__StrictHttpResponse<Array<GetMeasurementSpotsByLocationModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (MeasurementLocationId != null) __params = __params.set('MeasurementLocationId', MeasurementLocationId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/GetMeasurementSpotsByLocation`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<GetMeasurementSpotsByLocationModel>>;
      })
    );
  }
  /**
   * @param MeasurementLocationId undefined
   * @return OK
   */
  GetMeasurementSpotsByLocation(MeasurementLocationId?: number): __Observable<Array<GetMeasurementSpotsByLocationModel>> {
    return this.GetMeasurementSpotsByLocationResponse(MeasurementLocationId).pipe(
      __map(_r => _r.body as Array<GetMeasurementSpotsByLocationModel>)
    );
  }

  /**
   * @param request undefined
   * @return OK
   */
  SearchBoilerplateResponse(request?: any): __Observable<__StrictHttpResponse<Array<SearchBoilerplateModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (request != null) __params = __params.set('request', request.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/SearchBoilerplate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SearchBoilerplateModel>>;
      })
    );
  }
  /**
   * @param request undefined
   * @return OK
   */
  SearchBoilerplate(request?: any): __Observable<Array<SearchBoilerplateModel>> {
    return this.SearchBoilerplateResponse(request).pipe(
      __map(_r => _r.body as Array<SearchBoilerplateModel>)
    );
  }

  /**
   * @param request undefined
   * @return OK
   */
  SearchCaseOfDamageResponse(request?: any): __Observable<__StrictHttpResponse<Array<SearchCaseOfDamageModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (request != null) __params = __params.set('request', request.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/SearchCaseOfDamage`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SearchCaseOfDamageModel>>;
      })
    );
  }
  /**
   * @param request undefined
   * @return OK
   */
  SearchCaseOfDamage(request?: any): __Observable<Array<SearchCaseOfDamageModel>> {
    return this.SearchCaseOfDamageResponse(request).pipe(
      __map(_r => _r.body as Array<SearchCaseOfDamageModel>)
    );
  }

  /**
   * @param itemID undefined
   * @return OK
   */
  DownloadCODPicDocItemResponse(itemID?: number): __Observable<__StrictHttpResponse<Blob>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (itemID != null) __params = __params.set('itemID', itemID.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/download`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'blob'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Blob>;
      })
    );
  }
  /**
   * @param itemID undefined
   * @return OK
   */
  DownloadCODPicDocItem(itemID?: number): __Observable<Blob> {
    return this.DownloadCODPicDocItemResponse(itemID).pipe(
      __map(_r => _r.body as Blob)
    );
  }

  /**
   * @param codId undefined
   */
  GetPictureDocItemsResponse(codId: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/PictureDocItems/${encodeURIComponent(String(codId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param codId undefined
   */
  GetPictureDocItems(codId: string): __Observable<null> {
    return this.GetPictureDocItemsResponse(codId).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.SearchArticleByCodParams` containing the following parameters:
   *
   * - `codId`:
   *
   * - `projectProfileId`:
   *
   * @return OK
   */
  SearchArticleByCodResponse(params: CODService.SearchArticleByCodParams): __Observable<__StrictHttpResponse<Array<SearchArticleByCodModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.projectProfileId != null) __params = __params.set('projectProfileId', params.projectProfileId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.codId))}/SearchArticleByCod`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SearchArticleByCodModel>>;
      })
    );
  }
  /**
   * @param params The `CODService.SearchArticleByCodParams` containing the following parameters:
   *
   * - `codId`:
   *
   * - `projectProfileId`:
   *
   * @return OK
   */
  SearchArticleByCod(params: CODService.SearchArticleByCodParams): __Observable<Array<SearchArticleByCodModel>> {
    return this.SearchArticleByCodResponse(params).pipe(
      __map(_r => _r.body as Array<SearchArticleByCodModel>)
    );
  }

  /**
   * @param params The `CODService.GetWizardCalculationArticlesParams` containing the following parameters:
   *
   * - `codId`:
   *
   * - `articleCategoryCode`:
   *
   * @return OK
   */
  GetWizardCalculationArticlesResponse(params: CODService.GetWizardCalculationArticlesParams): __Observable<__StrictHttpResponse<Array<GetWizardCalculationArticlesModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.articleCategoryCode != null) __params = __params.set('articleCategoryCode', params.articleCategoryCode.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.codId))}/GetWizardCalculationArticles`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<GetWizardCalculationArticlesModel>>;
      })
    );
  }
  /**
   * @param params The `CODService.GetWizardCalculationArticlesParams` containing the following parameters:
   *
   * - `codId`:
   *
   * - `articleCategoryCode`:
   *
   * @return OK
   */
  GetWizardCalculationArticles(params: CODService.GetWizardCalculationArticlesParams): __Observable<Array<GetWizardCalculationArticlesModel>> {
    return this.GetWizardCalculationArticlesResponse(params).pipe(
      __map(_r => _r.body as Array<GetWizardCalculationArticlesModel>)
    );
  }

  /**
   * @return OK
   */
  SearchArticleCategoryResponse(): __Observable<__StrictHttpResponse<Array<SearchArticleCategoryModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/SearchArticleCategory`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SearchArticleCategoryModel>>;
      })
    );
  }
  /**
   * @return OK
   */
  SearchArticleCategory(): __Observable<Array<SearchArticleCategoryModel>> {
    return this.SearchArticleCategoryResponse().pipe(
      __map(_r => _r.body as Array<SearchArticleCategoryModel>)
    );
  }

  /**
   * @param articleId undefined
   * @return OK
   */
  SearchUnitResponse(articleId?: string): __Observable<__StrictHttpResponse<Array<SearchUnitModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (articleId != null) __params = __params.set('articleId', articleId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/SearchUnit`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SearchUnitModel>>;
      })
    );
  }
  /**
   * @param articleId undefined
   * @return OK
   */
  SearchUnit(articleId?: string): __Observable<Array<SearchUnitModel>> {
    return this.SearchUnitResponse(articleId).pipe(
      __map(_r => _r.body as Array<SearchUnitModel>)
    );
  }

  /**
   * @param id undefined
   * @return OK
   */
  GetItemsResponse(id: string): __Observable<__StrictHttpResponse<GetCODItemsModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(id))}/items`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetCODItemsModel>;
      })
    );
  }
  /**
   * @param id undefined
   * @return OK
   */
  GetItems(id: string): __Observable<GetCODItemsModel> {
    return this.GetItemsResponse(id).pipe(
      __map(_r => _r.body as GetCODItemsModel)
    );
  }

  /**
   * @return OK
   */
  GetReceiptItemSettingsResponse(): __Observable<__StrictHttpResponse<GetCODReceiptItemSettingsModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/ReceiptItemSettings`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetCODReceiptItemSettingsModel>;
      })
    );
  }
  /**
   * @return OK
   */
  GetReceiptItemSettings(): __Observable<GetCODReceiptItemSettingsModel> {
    return this.GetReceiptItemSettingsResponse().pipe(
      __map(_r => _r.body as GetCODReceiptItemSettingsModel)
    );
  }

  /**
   * @param id undefined
   * @return OK
   */
  GetFileAttachementResponse(id: number): __Observable<__StrictHttpResponse<GetFileAttachementModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(id))}/FileAttachement`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetFileAttachementModel>;
      })
    );
  }
  /**
   * @param id undefined
   * @return OK
   */
  GetFileAttachement(id: number): __Observable<GetFileAttachementModel> {
    return this.GetFileAttachementResponse(id).pipe(
      __map(_r => _r.body as GetFileAttachementModel)
    );
  }

  /**
   * @param CODId undefined
   * @return OK
   */
  GetMaxPosPicDocItemResponse(CODId?: string): __Observable<__StrictHttpResponse<GetMaxPosPicDocItemModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (CODId != null) __params = __params.set('CODId', CODId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/CODId`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetMaxPosPicDocItemModel>;
      })
    );
  }
  /**
   * @param CODId undefined
   * @return OK
   */
  GetMaxPosPicDocItem(CODId?: string): __Observable<GetMaxPosPicDocItemModel> {
    return this.GetMaxPosPicDocItemResponse(CODId).pipe(
      __map(_r => _r.body as GetMaxPosPicDocItemModel)
    );
  }

  /**
   * @param id undefined
   * @return OK
   */
  GetResourceBookingResponse(id: string): __Observable<__StrictHttpResponse<GetResourceBookingModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(id))}/ResourceBookings`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetResourceBookingModel>;
      })
    );
  }
  /**
   * @param id undefined
   * @return OK
   */
  GetResourceBooking(id: string): __Observable<GetResourceBookingModel> {
    return this.GetResourceBookingResponse(id).pipe(
      __map(_r => _r.body as GetResourceBookingModel)
    );
  }

  /**
   * @param id undefined
   * @return OK
   */
  GetLeakDetectionResourceBookingResponse(id: string): __Observable<__StrictHttpResponse<GetLeakDetectionResourceBookingModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(id))}/GetLeakDetectionResourceBooking`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetLeakDetectionResourceBookingModel>;
      })
    );
  }
  /**
   * @param id undefined
   * @return OK
   */
  GetLeakDetectionResourceBooking(id: string): __Observable<GetLeakDetectionResourceBookingModel> {
    return this.GetLeakDetectionResourceBookingResponse(id).pipe(
      __map(_r => _r.body as GetLeakDetectionResourceBookingModel)
    );
  }

  /**
   * @param MeasurementProtocolId undefined
   * @return OK
   */
  LoadSpotsWithoutEntriesResponse(MeasurementProtocolId?: number): __Observable<__StrictHttpResponse<Array<LoadSpotsWithoutEntriesModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (MeasurementProtocolId != null) __params = __params.set('MeasurementProtocolId', MeasurementProtocolId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/MeasurementSpotWithoutEntries`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LoadSpotsWithoutEntriesModel>>;
      })
    );
  }
  /**
   * @param MeasurementProtocolId undefined
   * @return OK
   */
  LoadSpotsWithoutEntries(MeasurementProtocolId?: number): __Observable<Array<LoadSpotsWithoutEntriesModel>> {
    return this.LoadSpotsWithoutEntriesResponse(MeasurementProtocolId).pipe(
      __map(_r => _r.body as Array<LoadSpotsWithoutEntriesModel>)
    );
  }

  /**
   * @param id undefined
   * @return OK
   */
  GetScmMessagesResponse(id: string): __Observable<__StrictHttpResponse<GetScmMessagesModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(id))}/ScmMessages`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetScmMessagesModel>;
      })
    );
  }
  /**
   * @param id undefined
   * @return OK
   */
  GetScmMessages(id: string): __Observable<GetScmMessagesModel> {
    return this.GetScmMessagesResponse(id).pipe(
      __map(_r => _r.body as GetScmMessagesModel)
    );
  }

  /**
   * @param params The `CODService.GetScmMessageDownloadParams` containing the following parameters:
   *
   * - `messageId`:
   *
   * - `id`:
   *
   * @return OK
   */
  GetScmMessageDownloadResponse(params: CODService.GetScmMessageDownloadParams): __Observable<__StrictHttpResponse<GetScmMessagesModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.id))}/GetScmMessageDownload/${encodeURIComponent(String(params.messageId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetScmMessagesModel>;
      })
    );
  }
  /**
   * @param params The `CODService.GetScmMessageDownloadParams` containing the following parameters:
   *
   * - `messageId`:
   *
   * - `id`:
   *
   * @return OK
   */
  GetScmMessageDownload(params: CODService.GetScmMessageDownloadParams): __Observable<GetScmMessagesModel> {
    return this.GetScmMessageDownloadResponse(params).pipe(
      __map(_r => _r.body as GetScmMessagesModel)
    );
  }

  /**
   * @param params The `CODService.SendScmMessagesParams` containing the following parameters:
   *
   * - `caseOfDamageId`:
   *
   * - `parameters`:
   *
   * - `commandKey`:
   *
   * @return OK
   */
  SendScmMessagesResponse(params: CODService.SendScmMessagesParams): __Observable<__StrictHttpResponse<GetScmMessagesModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.parameters;
    if (params.commandKey != null) __params = __params.set('commandKey', params.commandKey.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.caseOfDamageId))}/SendScmMessages`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetScmMessagesModel>;
      })
    );
  }
  /**
   * @param params The `CODService.SendScmMessagesParams` containing the following parameters:
   *
   * - `caseOfDamageId`:
   *
   * - `parameters`:
   *
   * - `commandKey`:
   *
   * @return OK
   */
  SendScmMessages(params: CODService.SendScmMessagesParams): __Observable<GetScmMessagesModel> {
    return this.SendScmMessagesResponse(params).pipe(
      __map(_r => _r.body as GetScmMessagesModel)
    );
  }

  /**
   * @param command undefined
   */
  SendInvoiceFromCODResponse(command?: SendInvoiceFromCODCommand): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = command;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/SendInvoiceFromCOD`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param command undefined
   */
  SendInvoiceFromCOD(command?: SendInvoiceFromCODCommand): __Observable<null> {
    return this.SendInvoiceFromCODResponse(command).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param blobId undefined
   * @return OK
   */
  GetBlobReferencingObjectsResponse(blobId: string): __Observable<__StrictHttpResponse<Array<GetBlobReferencingObjectsModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/ReferencingBlobs/${encodeURIComponent(String(blobId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<GetBlobReferencingObjectsModel>>;
      })
    );
  }
  /**
   * @param blobId undefined
   * @return OK
   */
  GetBlobReferencingObjects(blobId: string): __Observable<Array<GetBlobReferencingObjectsModel>> {
    return this.GetBlobReferencingObjectsResponse(blobId).pipe(
      __map(_r => _r.body as Array<GetBlobReferencingObjectsModel>)
    );
  }

  /**
   * @param id undefined
   * @return OK
   */
  GetMeasurementProtocolsByCodResponse(id: string): __Observable<__StrictHttpResponse<Array<GetMeasurementProtocolsByCodModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(id))}/MeasurementProtocols`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<GetMeasurementProtocolsByCodModel>>;
      })
    );
  }
  /**
   * @param id undefined
   * @return OK
   */
  GetMeasurementProtocolsByCod(id: string): __Observable<Array<GetMeasurementProtocolsByCodModel>> {
    return this.GetMeasurementProtocolsByCodResponse(id).pipe(
      __map(_r => _r.body as Array<GetMeasurementProtocolsByCodModel>)
    );
  }

  /**
   * @param id undefined
   * @return OK
   */
  GetLeakageProtocolResponse(id: number): __Observable<__StrictHttpResponse<GetLeakageProtocolModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/LeakageLocationProtocol/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetLeakageProtocolModel>;
      })
    );
  }
  /**
   * @param id undefined
   * @return OK
   */
  GetLeakageProtocol(id: number): __Observable<GetLeakageProtocolModel> {
    return this.GetLeakageProtocolResponse(id).pipe(
      __map(_r => _r.body as GetLeakageProtocolModel)
    );
  }

  /**
   * @param request undefined
   * @return OK
   */
  GetLeakageEquipementsResponse(request?: any): __Observable<__StrictHttpResponse<Array<GetLeakageEquipementsModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (request != null) __params = __params.set('request', request.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/GetLeakageEquipements`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<GetLeakageEquipementsModel>>;
      })
    );
  }
  /**
   * @param request undefined
   * @return OK
   */
  GetLeakageEquipements(request?: any): __Observable<Array<GetLeakageEquipementsModel>> {
    return this.GetLeakageEquipementsResponse(request).pipe(
      __map(_r => _r.body as Array<GetLeakageEquipementsModel>)
    );
  }

  /**
   * @param params The `CODService.GetCODProcurementCostItemParams` containing the following parameters:
   *
   * - `pciId`:
   *
   * - `id`:
   *
   * @return OK
   */
  GetCODProcurementCostItemResponse(params: CODService.GetCODProcurementCostItemParams): __Observable<__StrictHttpResponse<ProcurementCostItemModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.id))}/ProcurementCostItems/${encodeURIComponent(String(params.pciId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProcurementCostItemModel>;
      })
    );
  }
  /**
   * @param params The `CODService.GetCODProcurementCostItemParams` containing the following parameters:
   *
   * - `pciId`:
   *
   * - `id`:
   *
   * @return OK
   */
  GetCODProcurementCostItem(params: CODService.GetCODProcurementCostItemParams): __Observable<ProcurementCostItemModel> {
    return this.GetCODProcurementCostItemResponse(params).pipe(
      __map(_r => _r.body as ProcurementCostItemModel)
    );
  }

  /**
   * @param id undefined
   * @return OK
   */
  GetCaseOfDamageMeasureItemsResponse(id: string): __Observable<__StrictHttpResponse<GetCaseOfDamageMeasureItemsModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(id))}/MeasureItems`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetCaseOfDamageMeasureItemsModel>;
      })
    );
  }
  /**
   * @param id undefined
   * @return OK
   */
  GetCaseOfDamageMeasureItems(id: string): __Observable<GetCaseOfDamageMeasureItemsModel> {
    return this.GetCaseOfDamageMeasureItemsResponse(id).pipe(
      __map(_r => _r.body as GetCaseOfDamageMeasureItemsModel)
    );
  }

  /**
   * @param params The `CODService.GetCODPowerConsumptionCardParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `caseOfDamageId`:
   *
   * @return OK
   */
  GetCODPowerConsumptionCardResponse(params: CODService.GetCODPowerConsumptionCardParams): __Observable<__StrictHttpResponse<GetCODPowerConsumptionCardModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.caseOfDamageId))}/PowerConsumptionCard/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetCODPowerConsumptionCardModel>;
      })
    );
  }
  /**
   * @param params The `CODService.GetCODPowerConsumptionCardParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `caseOfDamageId`:
   *
   * @return OK
   */
  GetCODPowerConsumptionCard(params: CODService.GetCODPowerConsumptionCardParams): __Observable<GetCODPowerConsumptionCardModel> {
    return this.GetCODPowerConsumptionCardResponse(params).pipe(
      __map(_r => _r.body as GetCODPowerConsumptionCardModel)
    );
  }

  /**
   * @param SearchTerm undefined
   * @return OK
   */
  SearchCODsResponse(SearchTerm?: string): __Observable<__StrictHttpResponse<Array<SearchCODsModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (SearchTerm != null) __params = __params.set('SearchTerm', SearchTerm.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/SearchCODs`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SearchCODsModel>>;
      })
    );
  }
  /**
   * @param SearchTerm undefined
   * @return OK
   */
  SearchCODs(SearchTerm?: string): __Observable<Array<SearchCODsModel>> {
    return this.SearchCODsResponse(SearchTerm).pipe(
      __map(_r => _r.body as Array<SearchCODsModel>)
    );
  }

  /**
   * @param SearchTerm undefined
   * @return OK
   */
  SearchCODsByTelephoneResponse(SearchTerm?: string): __Observable<__StrictHttpResponse<Array<SearchCODsModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (SearchTerm != null) __params = __params.set('SearchTerm', SearchTerm.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/SearchCODsByTelephone`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SearchCODsModel>>;
      })
    );
  }
  /**
   * @param SearchTerm undefined
   * @return OK
   */
  SearchCODsByTelephone(SearchTerm?: string): __Observable<Array<SearchCODsModel>> {
    return this.SearchCODsByTelephoneResponse(SearchTerm).pipe(
      __map(_r => _r.body as Array<SearchCODsModel>)
    );
  }

  /**
   * @param SearchTerm undefined
   * @return OK
   */
  SearchOpenCODsResponse(SearchTerm?: string): __Observable<__StrictHttpResponse<Array<SearchOpenCODsModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (SearchTerm != null) __params = __params.set('SearchTerm', SearchTerm.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/SearchOpenCODs`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SearchOpenCODsModel>>;
      })
    );
  }
  /**
   * @param SearchTerm undefined
   * @return OK
   */
  SearchOpenCODs(SearchTerm?: string): __Observable<Array<SearchOpenCODsModel>> {
    return this.SearchOpenCODsResponse(SearchTerm).pipe(
      __map(_r => _r.body as Array<SearchOpenCODsModel>)
    );
  }

  /**
   * @param params The `CODService.GetCodHistoriesByCodParams` containing the following parameters:
   *
   * - `Type`:
   *
   * - `Status`:
   *
   * - `CodId`:
   *
   * @return OK
   */
  GetCodHistoriesByCodResponse(params: CODService.GetCodHistoriesByCodParams): __Observable<__StrictHttpResponse<Array<GetCodHistoriesByCodModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Type != null) __params = __params.set('Type', params.Type.toString());
    if (params.Status != null) __params = __params.set('Status', params.Status.toString());
    if (params.CodId != null) __params = __params.set('CodId', params.CodId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/GetCodHistoriesByCod`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<GetCodHistoriesByCodModel>>;
      })
    );
  }
  /**
   * @param params The `CODService.GetCodHistoriesByCodParams` containing the following parameters:
   *
   * - `Type`:
   *
   * - `Status`:
   *
   * - `CodId`:
   *
   * @return OK
   */
  GetCodHistoriesByCod(params: CODService.GetCodHistoriesByCodParams): __Observable<Array<GetCodHistoriesByCodModel>> {
    return this.GetCodHistoriesByCodResponse(params).pipe(
      __map(_r => _r.body as Array<GetCodHistoriesByCodModel>)
    );
  }

  /**
   * @param codId undefined
   * @return OK
   */
  GetLocationsByCodIdResponse(codId?: string): __Observable<__StrictHttpResponse<Array<GetMeasurementLocationsByCodIdModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (codId != null) __params = __params.set('codId', codId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/LocationsByCodId`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<GetMeasurementLocationsByCodIdModel>>;
      })
    );
  }
  /**
   * @param codId undefined
   * @return OK
   */
  GetLocationsByCodId(codId?: string): __Observable<Array<GetMeasurementLocationsByCodIdModel>> {
    return this.GetLocationsByCodIdResponse(codId).pipe(
      __map(_r => _r.body as Array<GetMeasurementLocationsByCodIdModel>)
    );
  }

  /**
   * @param locationId undefined
   * @return OK
   */
  GetMetersByLocationResponse(locationId?: number): __Observable<__StrictHttpResponse<Array<GetMeasurementMetersByLocationIdModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (locationId != null) __params = __params.set('locationId', locationId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/MetersByLocation`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<GetMeasurementMetersByLocationIdModel>>;
      })
    );
  }
  /**
   * @param locationId undefined
   * @return OK
   */
  GetMetersByLocation(locationId?: number): __Observable<Array<GetMeasurementMetersByLocationIdModel>> {
    return this.GetMetersByLocationResponse(locationId).pipe(
      __map(_r => _r.body as Array<GetMeasurementMetersByLocationIdModel>)
    );
  }

  /**
   * @param params The `CODService.GetCaseOfDamageCommentsParams` containing the following parameters:
   *
   * - `objectId`:
   *
   * - `commentType`:
   *
   * @return OK
   */
  GetCaseOfDamageCommentsResponse(params: CODService.GetCaseOfDamageCommentsParams): __Observable<__StrictHttpResponse<GetCaseOfDamageCommentsResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.commentType != null) __params = __params.set('commentType', params.commentType.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v0/api/COD/CaseOfDamageComments/${encodeURIComponent(String(params.objectId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetCaseOfDamageCommentsResult>;
      })
    );
  }
  /**
   * @param params The `CODService.GetCaseOfDamageCommentsParams` containing the following parameters:
   *
   * - `objectId`:
   *
   * - `commentType`:
   *
   * @return OK
   */
  GetCaseOfDamageComments(params: CODService.GetCaseOfDamageCommentsParams): __Observable<GetCaseOfDamageCommentsResult> {
    return this.GetCaseOfDamageCommentsResponse(params).pipe(
      __map(_r => _r.body as GetCaseOfDamageCommentsResult)
    );
  }

  /**
   * @param params The `CODService.UpdateCODStatusParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   *
   * @return No Content
   */
  UpdateCODStatusResponse(params: CODService.UpdateCODStatusParams): __Observable<__StrictHttpResponse<{[key: string]: any}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/COD/Status/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: any}>;
      })
    );
  }
  /**
   * @param params The `CODService.UpdateCODStatusParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `command`:
   *
   * @return No Content
   */
  UpdateCODStatus(params: CODService.UpdateCODStatusParams): __Observable<{[key: string]: any}> {
    return this.UpdateCODStatusResponse(params).pipe(
      __map(_r => _r.body as {[key: string]: any})
    );
  }

  /**
   * @param params The `CODService.CreateContactPersonParams` containing the following parameters:
   *
   * - `caseOfDamageId`:
   *
   * - `command`:
   */
  CreateContactPersonResponse(params: CODService.CreateContactPersonParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.caseOfDamageId))}/ContactPerson`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.CreateContactPersonParams` containing the following parameters:
   *
   * - `caseOfDamageId`:
   *
   * - `command`:
   */
  CreateContactPerson(params: CODService.CreateContactPersonParams): __Observable<null> {
    return this.CreateContactPersonResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.CreateCODInsureeContactPersonParams` containing the following parameters:
   *
   * - `contactPersonId`:
   *
   * - `caseOfDamageId`:
   */
  CreateCODInsureeContactPersonResponse(params: CODService.CreateCODInsureeContactPersonParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.caseOfDamageId))}/${encodeURIComponent(String(params.contactPersonId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.CreateCODInsureeContactPersonParams` containing the following parameters:
   *
   * - `contactPersonId`:
   *
   * - `caseOfDamageId`:
   */
  CreateCODInsureeContactPerson(params: CODService.CreateCODInsureeContactPersonParams): __Observable<null> {
    return this.CreateCODInsureeContactPersonResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.DeleteCODInsureeContactPersonParams` containing the following parameters:
   *
   * - `caseOfDamageId`:
   *
   * - `contactPersonId`:
   */
  DeleteCODInsureeContactPersonResponse(params: CODService.DeleteCODInsureeContactPersonParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.contactPersonId != null) __params = __params.set('contactPersonId', params.contactPersonId.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.caseOfDamageId))}/InsureeContactPerson`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.DeleteCODInsureeContactPersonParams` containing the following parameters:
   *
   * - `caseOfDamageId`:
   *
   * - `contactPersonId`:
   */
  DeleteCODInsureeContactPerson(params: CODService.DeleteCODInsureeContactPersonParams): __Observable<null> {
    return this.DeleteCODInsureeContactPersonResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.CreateCODItemParams` containing the following parameters:
   *
   * - `codId`:
   *
   * - `command`:
   */
  CreateCODItemResponse(params: CODService.CreateCODItemParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.codId))}/items`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.CreateCODItemParams` containing the following parameters:
   *
   * - `codId`:
   *
   * - `command`:
   */
  CreateCODItem(params: CODService.CreateCODItemParams): __Observable<null> {
    return this.CreateCODItemResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.BulkDeleteItemParams` containing the following parameters:
   *
   * - `codId`:
   *
   * - `codItemsId`:
   */
  BulkDeleteItemResponse(params: CODService.BulkDeleteItemParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.codItemsId;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.codId))}/items`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.BulkDeleteItemParams` containing the following parameters:
   *
   * - `codId`:
   *
   * - `codItemsId`:
   */
  BulkDeleteItem(params: CODService.BulkDeleteItemParams): __Observable<null> {
    return this.BulkDeleteItemResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.BulkDeleteItemGroupParams` containing the following parameters:
   *
   * - `codId`:
   *
   * - `codItemGroupsCode`:
   */
  BulkDeleteItemGroupResponse(params: CODService.BulkDeleteItemGroupParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.codItemGroupsCode;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.codId))}/itemGroups`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.BulkDeleteItemGroupParams` containing the following parameters:
   *
   * - `codId`:
   *
   * - `codItemGroupsCode`:
   */
  BulkDeleteItemGroup(params: CODService.BulkDeleteItemGroupParams): __Observable<null> {
    return this.BulkDeleteItemGroupResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param command undefined
   */
  SaveReceiptItemSettingsResponse(command?: SaveCODReceiptItemSettingsCommand): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = command;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/COD/SaveReceiptItemSettings`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param command undefined
   */
  SaveReceiptItemSettings(command?: SaveCODReceiptItemSettingsCommand): __Observable<null> {
    return this.SaveReceiptItemSettingsResponse(command).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.CreateCODHistoryParams` containing the following parameters:
   *
   * - `caseOfDamageId`:
   *
   * - `command`:
   */
  CreateCODHistoryResponse(params: CODService.CreateCODHistoryParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.command;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.caseOfDamageId))}/codHistory`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.CreateCODHistoryParams` containing the following parameters:
   *
   * - `caseOfDamageId`:
   *
   * - `command`:
   */
  CreateCODHistory(params: CODService.CreateCODHistoryParams): __Observable<null> {
    return this.CreateCODHistoryResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.DeleteCODHistoryParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `caseOfDamageId`:
   */
  DeleteCODHistoryResponse(params: CODService.DeleteCODHistoryParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.caseOfDamageId))}/${encodeURIComponent(String(params.id))}/deleteCodHistory`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.DeleteCODHistoryParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `caseOfDamageId`:
   */
  DeleteCODHistory(params: CODService.DeleteCODHistoryParams): __Observable<null> {
    return this.DeleteCODHistoryResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CODService.UpdateCODHistoryParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `caseOfDamageId`:
   *
   * - `command`:
   */
  UpdateCODHistoryResponse(params: CODService.UpdateCODHistoryParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.command;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v0/api/COD/${encodeURIComponent(String(params.caseOfDamageId))}/${encodeURIComponent(String(params.id))}/codHistory`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `CODService.UpdateCODHistoryParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `caseOfDamageId`:
   *
   * - `command`:
   */
  UpdateCODHistory(params: CODService.UpdateCODHistoryParams): __Observable<null> {
    return this.UpdateCODHistoryResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module CODService {

  /**
   * Parameters for MarkCodHistoryAsDone
   */
  export interface MarkCodHistoryAsDoneParams {
    id: number;
    caseOfDamageId: string;
    command?: MarkCodHistoryAsDoneCommand;
  }

  /**
   * Parameters for CreateCODPicDocItem
   */
  export interface CreateCODPicDocItemParams {
    command?: CreateCODPicDocItemCommand;
    CODId?: string;
  }

  /**
   * Parameters for CreatePicDocItems
   */
  export interface CreatePicDocItemsParams {
    command?: CreateCODPicDocItemsCommand;
    codId?: string;
  }

  /**
   * Parameters for UpdateCODPicDocItem
   */
  export interface UpdateCODPicDocItemParams {
    id: number;
    command?: UpdateCODPicDocItemCommand;
  }

  /**
   * Parameters for ChangeArticleCategory
   */
  export interface ChangeArticleCategoryParams {
    codItemId: number;
    codId: string;
    articleCategoryCode?: string;
  }

  /**
   * Parameters for ChangeArticle
   */
  export interface ChangeArticleParams {
    codItemId: number;
    codId: string;
    articleId?: string;
  }

  /**
   * Parameters for ChangeUnit
   */
  export interface ChangeUnitParams {
    codItemId: number;
    codId: string;
    unitCode?: string;
  }

  /**
   * Parameters for ChangeQuantity
   */
  export interface ChangeQuantityParams {
    codItemId: number;
    codId: string;
    quantity?: number;
  }

  /**
   * Parameters for ChangeDescription
   */
  export interface ChangeDescriptionParams {
    codItemId: number;
    codId: string;
    command?: ChangeDescriptionCommand;
  }

  /**
   * Parameters for CreateCaseOfDamageOffer
   */
  export interface CreateCaseOfDamageOfferParams {
    codId: string;
    command?: CreateCaseOfDamageOfferCommand;
  }

  /**
   * Parameters for CreateCODSettlementInvoice
   */
  export interface CreateCODSettlementInvoiceParams {
    command?: CreateCODSettlementInvoiceCommand;
    CODId?: string;
  }

  /**
   * Parameters for CreateCaseOfDamageInvoice
   */
  export interface CreateCaseOfDamageInvoiceParams {
    command?: CreateCaseOfDamageInvoiceCommand;
    CODId?: string;
  }

  /**
   * Parameters for CreateCODPrePaymentInvoice
   */
  export interface CreateCODPrePaymentInvoiceParams {
    command?: CreateCODPrePaymentInvoiceCommand;
    CODId?: string;
  }

  /**
   * Parameters for ChangeItemPrice
   */
  export interface ChangeItemPriceParams {
    codItemId: number;
    codId: string;
    itemPrice?: number;
  }

  /**
   * Parameters for ChangeTotalCalculationPrice
   */
  export interface ChangeTotalCalculationPriceParams {
    codItemId: number;
    codId: string;
    totalCalculationPrice?: number;
  }

  /**
   * Parameters for ChangeItemAcquisitionCosts
   */
  export interface ChangeItemAcquisitionCostsParams {
    codItemId: number;
    codId: string;
    itemAcquisitionCosts?: number;
  }

  /**
   * Parameters for CreateFileAttachment
   */
  export interface CreateFileAttachmentParams {
    codId: string;
    command?: CreateFileAttachmentCommand;
  }

  /**
   * Parameters for UpdateFileAttachment
   */
  export interface UpdateFileAttachmentParams {
    id: number;
    command?: UpdateFileAttachmentCommand;
  }

  /**
   * Parameters for CreateResourceBookings
   */
  export interface CreateResourceBookingsParams {
    role?: string;
    command?: CreateResourceBookingsCommand;
    codId?: string;
  }

  /**
   * Parameters for DeleteResourceBookings
   */
  export interface DeleteResourceBookingsParams {
    id: number;
    role?: string;
    codId?: string;
  }

  /**
   * Parameters for UpdateResourceBookings
   */
  export interface UpdateResourceBookingsParams {
    id: number;
    role?: string;
    command?: UpdateResourceBookingsCommand;
    codId?: string;
  }

  /**
   * Parameters for UpdateMeasurementSpot
   */
  export interface UpdateMeasurementSpotParams {
    id: number;
    command?: UpdateMeasurementSpotCommand;
  }

  /**
   * Parameters for UpdateMeasurementLocation
   */
  export interface UpdateMeasurementLocationParams {
    id: number;
    command?: UpdateMeasurementLocationCommand;
  }

  /**
   * Parameters for UpdateMeasurementMeter
   */
  export interface UpdateMeasurementMeterParams {
    id: number;
    command?: UpdateMeasurementMeterCommand;
  }

  /**
   * Parameters for UpdateMeasurementTask
   */
  export interface UpdateMeasurementTaskParams {
    id: number;
    command?: UpdateMeasurementTaskCommand;
  }

  /**
   * Parameters for UpdateMeasurementProtocol
   */
  export interface UpdateMeasurementProtocolParams {
    id: number;
    command?: UpdateMeasurementProtocolCommand;
  }

  /**
   * Parameters for LoadMeasurementSpots
   */
  export interface LoadMeasurementSpotsParams {
    MeasurementTaskId?: number;
    MeasurementProtocolId?: number;
  }

  /**
   * Parameters for CreateMeasurementLocation
   */
  export interface CreateMeasurementLocationParams {
    command?: CreateMeasurementLocationCommand;
    MeasurementProtocolId?: number;
  }

  /**
   * Parameters for CreateMeasurementTask
   */
  export interface CreateMeasurementTaskParams {
    command?: CreateMeasurementTaskCommand;
    MeasurementProtocolId?: number;
  }

  /**
   * Parameters for CreateMeasurementProtocol
   */
  export interface CreateMeasurementProtocolParams {
    command?: CreateMeasurementProtocolCommand;
    CaseOfDamageId?: string;
  }

  /**
   * Parameters for CreateMeasurementEntryPicture
   */
  export interface CreateMeasurementEntryPictureParams {
    MeasurementEntryId: number;
    command?: CreateMeasurementEntryPictureCommand;
  }

  /**
   * Parameters for CreateMeasurementEntry
   */
  export interface CreateMeasurementEntryParams {
    MeasurementWorkingOrderId: number;
    MeasurementSpotId: number;
    command?: CreateMeasurementEntryCommand;
  }

  /**
   * Parameters for ChangeMeasure
   */
  export interface ChangeMeasureParams {
    codId: string;
    command?: ChangeMeasureCommand;
  }

  /**
   * Parameters for UpdateMeasurementEntry
   */
  export interface UpdateMeasurementEntryParams {
    MeasurementEntryId: number;
    command?: UpdateMeasurementEntryCommand;
  }

  /**
   * Parameters for UpdateMeasurementEntryPicture
   */
  export interface UpdateMeasurementEntryPictureParams {
    MeasurementEntryPictureId: number;
    command?: UpdateMeasurementEntryPictureCommand;
  }

  /**
   * Parameters for CreateLeakageLocationProtocol
   */
  export interface CreateLeakageLocationProtocolParams {
    id: string;
    command?: CreateLeakageLocationProtocolCommand;
  }

  /**
   * Parameters for UpdateLeakageLocationProtocol
   */
  export interface UpdateLeakageLocationProtocolParams {
    llid: number;
    command?: UpdateLeakageLocationProtocolCommand;
  }

  /**
   * Parameters for UpdateLeakageLocationProtocolSignature
   */
  export interface UpdateLeakageLocationProtocolSignatureParams {
    llid: number;
    command?: UpdateLeakageLocationProtocolSignatureCommand;
  }

  /**
   * Parameters for UpdateLeakageLocationProtocolLocatorSignature
   */
  export interface UpdateLeakageLocationProtocolLocatorSignatureParams {
    id: number;
    command?: UpdateLeakageLocationProtocolLocatorSignatureCommand;
  }

  /**
   * Parameters for DeleteLeakageLocationProtocol
   */
  export interface DeleteLeakageLocationProtocolParams {
    id: number;
    caseOfDamageId: string;
  }

  /**
   * Parameters for MoveLOReportToAnotherCOD
   */
  export interface MoveLOReportToAnotherCODParams {
    id: number;
    caseOfDamageId: string;
  }

  /**
   * Parameters for CreateProcurementCostItem
   */
  export interface CreateProcurementCostItemParams {
    caseOfDamageId: string;
    command?: ProcurementCostItemModel;
  }

  /**
   * Parameters for UpdateProcurementCostItem
   */
  export interface UpdateProcurementCostItemParams {
    procurementCostItemId: number;
    caseOfDamageId: string;
    command?: ProcurementCostItemModel;
  }

  /**
   * Parameters for DeleteProcurementCostItem
   */
  export interface DeleteProcurementCostItemParams {
    procurementCostItemId: number;
    caseOfDamageId: string;
  }

  /**
   * Parameters for AddCaseOfDamageMeasureItem
   */
  export interface AddCaseOfDamageMeasureItemParams {
    caseOfDamageId: string;
    command?: AddCaseOfDamageMeasureItemCommand;
  }

  /**
   * Parameters for UpdateCaseOfDamageMeasureItem
   */
  export interface UpdateCaseOfDamageMeasureItemParams {
    caseOfDamageId: string;
    command?: UpdateCaseOfDamageMeasureItemCommand;
  }

  /**
   * Parameters for DeleteCaseOfDamageMeasureItem
   */
  export interface DeleteCaseOfDamageMeasureItemParams {
    caseOfDamageMeasureItemId: number;
    caseOfDamageId: string;
  }

  /**
   * Parameters for AssignMeasureItemToCalculationItem
   */
  export interface AssignMeasureItemToCalculationItemParams {
    caseOfDamageId: string;
    Position: number;
    MeasureItemID: number;
    CalculationItemId: number;
  }

  /**
   * Parameters for DeleteCalculationItemMeasureItem
   */
  export interface DeleteCalculationItemMeasureItemParams {
    caseOfDamageId: string;
    calculationItemMeasureItemId: number;
  }

  /**
   * Parameters for ChangeCalculationItemMeasureItemPosition
   */
  export interface ChangeCalculationItemMeasureItemPositionParams {
    caseOfDamageId: string;
    ItemID: number;
    command?: ChangeCalculationItemMeasureItemPositionCommand;
  }

  /**
   * Parameters for CreateCODCalcItems
   */
  export interface CreateCODCalcItemsParams {
    codId: string;
    command?: CreateCODItemsCommand;
  }

  /**
   * Parameters for ChangeIsOutsideCounty
   */
  export interface ChangeIsOutsideCountyParams {
    codId: string;
    command?: ChangeIsOutsideCountyCommand;
  }

  /**
   * Parameters for ChangekindOfDamageFlooding
   */
  export interface ChangekindOfDamageFloodingParams {
    codId: string;
    command?: ChangekindOfDamageFloodingCommand;
  }

  /**
   * Parameters for CreatePowerConsumptionCard
   */
  export interface CreatePowerConsumptionCardParams {
    id: string;
    command?: CreatePowerConsumptionCardCommand;
  }

  /**
   * Parameters for UpdatePowerConsumptionCard
   */
  export interface UpdatePowerConsumptionCardParams {
    id: string;
    command?: UpdatePowerConsumptionCardCommand;
  }

  /**
   * Parameters for DeletePowerConsumptionCard
   */
  export interface DeletePowerConsumptionCardParams {
    pccId: number;
    id: string;
  }

  /**
   * Parameters for ChangeSendLODoc
   */
  export interface ChangeSendLODocParams {
    codId: string;
    status?: string;
  }

  /**
   * Parameters for ChangeProjectProfile
   */
  export interface ChangeProjectProfileParams {
    codId: string;
    command?: ChangeProjectProfileCommand;
  }

  /**
   * Parameters for ChangeCODCustomerPriceDecisive
   */
  export interface ChangeCODCustomerPriceDecisiveParams {
    id: string;
    customerIdPriceDecisive: string;
  }

  /**
   * Parameters for ChangeCODDateOfAcceptance
   */
  export interface ChangeCODDateOfAcceptanceParams {
    id: string;
    dateOfAcceptance: string;
  }

  /**
   * Parameters for CreateSBBriefPdf
   */
  export interface CreateSBBriefPdfParams {
    Id: string;
    command?: CreateSBBriefPdfCommand;
  }

  /**
   * Parameters for SendSBBriefPdf
   */
  export interface SendSBBriefPdfParams {
    Id: string;
    command?: SendSBBriefPdfCommand;
  }

  /**
   * Parameters for SendEmail
   */
  export interface SendEmailParams {
    codId: string;
    command?: SendEmailCommand;
  }

  /**
   * Parameters for AssignConstructionEngineerToCOD
   */
  export interface AssignConstructionEngineerToCODParams {
    Id: string;
    command?: AssignConstructionEngineerToCODCommand;
  }

  /**
   * Parameters for SendContract
   */
  export interface SendContractParams {
    Id: string;
    command?: SendContractCommand;
  }

  /**
   * Parameters for UpdateCustomerReached
   */
  export interface UpdateCustomerReachedParams {
    id: string;
    command?: UpdateCustomerReachedCommand;
  }

  /**
   * Parameters for GetCodByTechnician
   */
  export interface GetCodByTechnicianParams {
    sortOrder?: string;
    StartDate?: string;
    SearchText?: string;
    PageSize?: number;
    PageNumber?: number;
    EndDate?: string;
    CODStatus?: string;
  }

  /**
   * Parameters for GetCodHistoriesReport
   */
  export interface GetCodHistoriesReportParams {
    status?: string;
    PageSize?: number;
    PageNumber?: number;
    EmployeeId?: string;
    CODId?: string;
  }

  /**
   * Parameters for GetLeakageLocationProtocolList
   */
  export interface GetLeakageLocationProtocolListParams {
    PageSize?: number;
    PageNumber?: number;
    CODId?: string;
  }

  /**
   * Parameters for GetContactPersonsByCodList
   */
  export interface GetContactPersonsByCodListParams {
    PageSize?: number;
    PageNumber?: number;
    CODId?: string;
  }

  /**
   * Parameters for UpdateCOD
   */
  export interface UpdateCODParams {
    id: string;
    command?: UpdateCODCommand;
  }

  /**
   * Parameters for UpdateContactPerson
   */
  export interface UpdateContactPersonParams {
    id: number;
    command?: UpdateContactPersonCommand;
  }

  /**
   * Parameters for SearchArticleByCod
   */
  export interface SearchArticleByCodParams {
    codId: string;
    projectProfileId?: string;
  }

  /**
   * Parameters for GetWizardCalculationArticles
   */
  export interface GetWizardCalculationArticlesParams {
    codId: string;
    articleCategoryCode?: string;
  }

  /**
   * Parameters for GetScmMessageDownload
   */
  export interface GetScmMessageDownloadParams {
    messageId: string;
    id: string;
  }

  /**
   * Parameters for SendScmMessages
   */
  export interface SendScmMessagesParams {
    caseOfDamageId: string;
    parameters?: Array<string>;
    commandKey?: string;
  }

  /**
   * Parameters for GetCODProcurementCostItem
   */
  export interface GetCODProcurementCostItemParams {
    pciId: number;
    id: string;
  }

  /**
   * Parameters for GetCODPowerConsumptionCard
   */
  export interface GetCODPowerConsumptionCardParams {
    id: number;
    caseOfDamageId: string;
  }

  /**
   * Parameters for GetCodHistoriesByCod
   */
  export interface GetCodHistoriesByCodParams {
    Type?: string;
    Status?: string;
    CodId?: string;
  }

  /**
   * Parameters for GetCaseOfDamageComments
   */
  export interface GetCaseOfDamageCommentsParams {
    objectId: string;
    commentType?: string;
  }

  /**
   * Parameters for UpdateCODStatus
   */
  export interface UpdateCODStatusParams {
    id: string;
    command?: UpdateCODStatusCommand;
  }

  /**
   * Parameters for CreateContactPerson
   */
  export interface CreateContactPersonParams {
    caseOfDamageId: string;
    command?: CreateContactPersonCommand;
  }

  /**
   * Parameters for CreateCODInsureeContactPerson
   */
  export interface CreateCODInsureeContactPersonParams {
    contactPersonId: number;
    caseOfDamageId: string;
  }

  /**
   * Parameters for DeleteCODInsureeContactPerson
   */
  export interface DeleteCODInsureeContactPersonParams {
    caseOfDamageId: string;
    contactPersonId?: number;
  }

  /**
   * Parameters for CreateCODItem
   */
  export interface CreateCODItemParams {
    codId: string;
    command?: CreateCODItemCommand;
  }

  /**
   * Parameters for BulkDeleteItem
   */
  export interface BulkDeleteItemParams {
    codId: string;
    codItemsId?: Array<number>;
  }

  /**
   * Parameters for BulkDeleteItemGroup
   */
  export interface BulkDeleteItemGroupParams {
    codId: string;
    codItemGroupsCode?: Array<string>;
  }

  /**
   * Parameters for CreateCODHistory
   */
  export interface CreateCODHistoryParams {
    caseOfDamageId: string;
    command?: CreateCODHistoryCommand;
  }

  /**
   * Parameters for DeleteCODHistory
   */
  export interface DeleteCODHistoryParams {
    id: number;
    caseOfDamageId: string;
  }

  /**
   * Parameters for UpdateCODHistory
   */
  export interface UpdateCODHistoryParams {
    id: number;
    caseOfDamageId: string;
    command?: UpdateCODHistoryCommand;
  }
}

export { CODService }
