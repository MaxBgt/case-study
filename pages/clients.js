import ContentClientsPage from "@/components/Clients/ContentClientsPage";
import { AnimatePresence, motion } from "framer-motion";

const Clients = () => {
  return (
    <>
      <h1 className="client-title">Clients</h1>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ type: "spring", stiffness: 70 }}
        >
          <ContentClientsPage />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Clients;
