from app import create_app
from app.models import db
from app.models.user import User
from app.models.client import Client
from app.models.fundi import Fundi
from app.models.job import Job
from faker import Faker
import random

app = create_app()
fake = Faker()

with app.app_context():
    db.drop_all()
    db.create_all()

    users = []
    clients = []
    fundis = []

    # Create 10 clients
    for _ in range(10):
        email = fake.email()
        password = fake.password()
        user = User(email=email, password=password, role='client')
        db.session.add(user)
        db.session.flush()  # Get user.id before commit

        client = Client(user_id=user.id,
                        job_description=fake.text(max_nb_chars=100),
                        job_description_file=f"{fake.word()}.pdf")
        db.session.add(client)

        users.append(user)
        clients.append(client)

    # Create 10 fundis
    for _ in range(10):
        email = fake.email()
        password = fake.password()
        user = User(email=email, password=password, role='fundi')
        db.session.add(user)
        db.session.flush()

        fundi = Fundi(user_id=user.id,
                      rating=round(random.uniform(3.0, 5.0), 2),
                      certificate=f"{fake.word()}.pdf",
                      job_completed=random.choice([True, False]),
                      message=fake.sentence(),
                      job_description=fake.text(max_nb_chars=120),
                      status=random.choice(['available', 'busy', 'interested']))
        db.session.add(fundi)

        users.append(user)
        fundis.append(fundi)

    db.session.commit()

    # Create 20 jobs
    for _ in range(20):
        description = fake.sentence(nb_words=6)
        price = round(random.uniform(1000, 10000), 2)
        budget = price + random.uniform(1000, 5000)
        client = random.choice(clients)
        fundi = random.choice(fundis)

        job = Job(description=description,
                  price=price,
                  budget=budget,
                  client_id=client.id,
                  fundi_id=fundi.id)
        db.session.add(job)

    db.session.commit()

    print("✅ Database seeded with 20 users and 20 jobs.")