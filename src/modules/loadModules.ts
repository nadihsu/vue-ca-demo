const modules = import.meta.glob('./*.ts', { eager: true });

export default function loadModules(app) {
  Object.values(modules).forEach((path: { install: Function }) => path.install?.(app));
}
