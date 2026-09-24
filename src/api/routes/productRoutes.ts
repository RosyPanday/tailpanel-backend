const uploadRoutes = Router();

uploadRoutes.post(
  "/therapist-document",
  (req, res, next) => {
    contextHandler({ req, res, next });
  },
  uploadTherapistDocuments,
  UploadController.uploadTherapistDocument,
);

export default uploadRoutes;