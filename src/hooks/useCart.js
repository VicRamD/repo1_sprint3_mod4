import { useState } from "react";

export const useCart = () => {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return {isOpen, open, close}
}

