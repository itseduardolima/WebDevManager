import { Button, Modal } from "antd";
import { useEffect, useState } from "react";
import ViewModal from "./viewModal";
import { MoneyCollectOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";

const OpenModal = () => {
  let { id } = useParams();
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(data);
      });
  }, [id]);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        <MoneyCollectOutlined /> Custo
      </Button>
      <Modal
        title="Total utilizado"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          {projects.length > 0 &&
            projects.map((project) => <ViewModal cost={project.cost} />)}
        </div>
      </Modal>
    </>
  );
};
export default OpenModal;
