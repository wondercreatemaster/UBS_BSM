import { Clear, Send } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import { openSnackbar } from "api/snackbar";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import axiosServices from "utils/axios";

const Restore = () =>
{
  const [file, setFile] = useState(null);

  const handleSubmit = async () =>
  {
    if (!file)
      return;
    let data = new FormData();
    data.append("smbfile", file);
    axiosServices.post('/api/files/smb', data)
      .then(response =>
      {
        if (response.status == 200)
          openSnackbar({
            open: true,
            message: response.data.message,
            variant: 'alert',

            alert: {
              color: 'success'
            }
          });
      })
      .catch(err =>
        openSnackbar({
          open: true,
          message: err,
          variant: 'alert',

          alert: {
            color: 'error'
          }
        })
      )
  }

  const onDrop = useCallback(acceptedFiles =>
  {
    if (acceptedFiles.length > 0)
      setFile(acceptedFiles[0])
    // Do something with the files
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, maxFiles: 1 })

  return <Card>
    <CardHeader title="Restore" />
    <CardContent className='p-[30px]'>
      {
        file ?
          <div className="border-dashed border-2 rounded-lg border-slate-500 flex items-center justify-center h-[200px] bg-slate-300">
            <Card className="p-3 flex items-center gap-3">
              <Typography className="text-xl">{file.name}</Typography>
              <IconButton onClick={() => setFile(null)}>
                <Clear />
              </IconButton>
            </Card>
          </div> :
          <div {...getRootProps()} className="border-dashed border-2 rounded-lg border-slate-500 flex items-center justify-center h-[200px] bg-slate-300 cursor-pointer">
            <input {...getInputProps()} />
            <Typography className="text-xl">
              {
                isDragActive ?
                  "Drop Here!" :
                  "Drag and drop your backup file here, or click here to select files"
              }
            </Typography>
          </div>
      }
    </CardContent>
    <CardActions disableSpacing className='px-[30px] pb-[20px]'>
      <Button
        className="ml-auto"
        variant="contained"
        onClick={handleSubmit}
        disabled={!file}
        endIcon={<Send />}>
        Submit
      </Button>
    </CardActions>
  </Card>
}

export default Restore;