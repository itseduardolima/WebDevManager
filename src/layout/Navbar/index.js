import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { DiffOutlined, EyeOutlined, HomeOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0">
      <nav
        className="flex items-center justify-between p-5 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <p className="logo">WebDevManager</p>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center icon rounded-md p-4 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 list">
          <Link
            to="/"
            className="-mx-3 item block rounded-lg text-white px-3 py-2.5 item  leading-7 "
          >
            HOME
          </Link>
          <Link
            to="/projects"
            className="-mx-3 item block rounded-lg px-3 item py-2.5 item  leading-7"
          >
            PROJETOS
          </Link>
          <Link
            to="/newproject"
            className="-mx-3 item block rounded-lg px-3 item py-2.5 item  leading-7"
          >
            NOVO PROJETO
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto menu px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <p className="logo">WebDevManager</p>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6">
                <Link
                  to="/"
                  className="-mx-3 block item px-3 py-2.5 leading-7 "
                >
                  <HomeOutlined />
                  HOME
                </Link>
                <Link
                  to="/projects"
                  className="-mx-3 block item px-3 py-2.5 leading-7"
                >
                  <EyeOutlined /> PROJETOS
                </Link>
                <Link
                  to="/newproject"
                  className="-mx-3 block item px-3 py-2.5 leading-7"
                >
                  <DiffOutlined /> NOVO PROJETO
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Navbar;
