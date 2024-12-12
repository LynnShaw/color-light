import * as DialogPrimitive from '@radix-ui/react-dialog';
import React from 'react';

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;

export function DialogContent({
  children,
  ...props
}: DialogPrimitive.DialogContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
      <DialogPrimitive.Content
        {...props}
        className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-lg"
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}