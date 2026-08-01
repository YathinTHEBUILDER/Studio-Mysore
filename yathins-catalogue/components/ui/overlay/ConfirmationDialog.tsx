"use client";

import * as React from "react";
import { Modal } from "./Modal";
import { Button } from "../buttons/Button";
import { AlertTriangle } from "lucide-react";

export interface ConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  isDanger?: boolean;
  loading?: boolean;
}

export const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Are you sure?",
  description = "This action cannot be undone.",
  confirmText = "Confirm",
  cancelText = "Cancel",
  isDanger = false,
  loading = false,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      description={description}
      size="sm"
      footer={
        <>
          <Button variant="ghost" size="sm" onClick={onClose} disabled={loading}>
            {cancelText}
          </Button>
          <Button
            variant={isDanger ? "danger" : "primary"}
            size="sm"
            onClick={onConfirm}
            loading={loading}
          >
            {confirmText}
          </Button>
        </>
      }
    >
      <div className="flex items-center gap-3 p-3 rounded-[10px] bg-neutral-900/60 border border-neutral-800">
        <AlertTriangle
          className={`h-5 w-5 shrink-0 ${
            isDanger ? "text-red-400" : "text-amber-400"
          }`}
        />
        <p className="text-xs text-neutral-300">
          Please review carefully before confirming your request.
        </p>
      </div>
    </Modal>
  );
};

ConfirmationDialog.displayName = "ConfirmationDialog";
